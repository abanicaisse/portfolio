import { MigrateUpArgs, MigrateDownArgs, sql } from "@payloadcms/db-postgres";

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // Fix for the column casting issue for 'content' in 'posts' table
  // This explicitly uses the USING clause to cast text/json to jsonb
  await db.execute(sql`
    ALTER TABLE "posts" ALTER COLUMN "content" TYPE jsonb USING content::jsonb;
  `);
}

export async function down({
  db,
  payload,
  req,
}: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "posts" ALTER COLUMN "content" TYPE text;
  `);
}
