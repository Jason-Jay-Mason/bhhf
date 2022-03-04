import { defineSchema } from "@tinacms/cli";
import type { TinaTemplate, TinaField } from "@tinacms/cli";

export default defineSchema({
  collections: [
    {
      label: "Page Content",
      name: "page",
      path: "content/page",
      format: "mdx",
      fields: [
        {
          name: "body",
          label: "Main Content",
          type: "rich-text",
          isBody: true,
        },
      ],
    },
    {
      label: "Global",
      name: "global",
      path: "content/global",
      format: "json",
      fields: [
        {
          name: "body",
          label: "Write some stuff!",
          type: "string",
        },
      ],
    },
  ],
});
