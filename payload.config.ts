import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000",
  admin: {
    user: "users",
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },

  collections: [
    // Users (admin access)
    {
      slug: "users",
      auth: true,
      fields: [],
    },
    // Blog posts / projects — customize as needed
    {
      slug: "posts",
      admin: { useAsTitle: "title" },
      fields: [
        { name: "title", type: "text", required: true },
        { name: "slug", type: "text", required: true, unique: true },
        { name: "content", type: "richText" },
        { name: "publishedAt", type: "date" },
        {
          name: "status",
          type: "select",
          options: ["draft", "published"],
          defaultValue: "draft",
        },
      ],
    },
    // Media
    {
      slug: "media",
      upload: true,
      fields: [{ name: "alt", type: "text" }],
    },
  ],

  editor: lexicalEditor({}),

  // Vercel Postgres (Neon) — uses POSTGRES_URL env var automatically
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL,
    },
    // Disable push in production
    push: process.env.NODE_ENV === "development",
  }),

  // Vercel Blob for media storage
  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || "",
    }),
  ],

  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  sharp,
});
