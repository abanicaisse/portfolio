import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import {
  lexicalEditor,
  BlocksFeature,
  BlocksFeatureProps,
  LinkFeature,
  UploadFeature,
  EXPERIMENTAL_TableFeature,
} from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { Block } from "payload";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const CodeBlock: Block = {
  slug: "Code",
  fields: [
    {
      name: "language",
      type: "select",
      options: [
        { label: "TypeScript", value: "typescript" },
        { label: "JavaScript", value: "javascript" },
        { label: "HTML", value: "html" },
        { label: "CSS", value: "css" },
        { label: "Python", value: "python" },
        { label: "Bash", value: "bash" },
        { label: "JSON", value: "json" },
      ],
      required: true,
      defaultValue: "typescript",
    },
    {
      name: "code",
      type: "code",
      required: true,
      admin: {
        language: "typescript",
      },
    },
  ],
};

const formatSlug = (val: string): string =>
  val
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
    .toLowerCase();

const appUrl =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

const corsOrigins = [
  appUrl,
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "",
  process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "",
  "https://portfolio.abanicaisse.vercel.app", // Fallback for your main vercel domain if known
].filter(Boolean);

export default buildConfig({
  serverURL: appUrl,
  cors: corsOrigins,
  csrf: corsOrigins,
  admin: {
    user: "users",
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    {
      slug: "users",
      auth: true,
      fields: [],
    },
    {
      slug: "categories",
      admin: {
        useAsTitle: "name",
      },
      fields: [{ name: "name", type: "text", required: true }],
    },
    {
      slug: "authors",
      admin: {
        useAsTitle: "name",
      },
      fields: [
        { name: "name", type: "text", required: true },
        { name: "avatar", type: "upload", relationTo: "media" },
      ],
    },
    {
      slug: "posts",
      admin: { useAsTitle: "title" },
      fields: [
        { name: "title", type: "text", required: true },
        {
          name: "slug",
          type: "text",
          required: true,
          unique: true,
          admin: {
            position: "sidebar",
          },
          hooks: {
            beforeValidate: [
              ({ value, data }) => {
                if (value) return formatSlug(value);
                if (data?.title) return formatSlug(data.title);
                return value;
              },
            ],
          },
        },
        { name: "excerpt", type: "textarea", required: true },
        {
          name: "content",
          type: "richText",
          required: true,
          editor: lexicalEditor({
            features: ({ defaultFeatures }) => [
              ...defaultFeatures,
              BlocksFeature({ blocks: [CodeBlock] }),
              EXPERIMENTAL_TableFeature(),
            ],
          }),
        },
        {
          name: "author",
          type: "relationship",
          relationTo: "authors",
          required: true,
        },
        {
          name: "category",
          type: "relationship",
          relationTo: "categories",
          required: true,
        },
        {
          name: "featuredImage",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        { name: "featured", type: "checkbox", defaultValue: false },
        { name: "publishedAt", type: "date" },
        {
          name: "status",
          type: "select",
          options: ["draft", "published"],
          defaultValue: "draft",
        },
      ],
    },
    {
      slug: "media",
      access: {
        read: () => true,
      },
      upload: true,
      fields: [{ name: "alt", type: "text" }],
    },
  ],
  editor: lexicalEditor({}),
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL,
    },
    push: process.env.NODE_ENV === "development",
  }),
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
