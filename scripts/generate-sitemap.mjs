import { writeFileSync } from "fs";
import { globby } from "globby";
import prettier from "prettier";

const getUpdateFrequency = (path) => {
  const frequencyOptions = ["never", "yearly", "monthly", "weekly", "daily", "hourly", "always"];

  return frequency[2];
};

async function generate() {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");
  const pages = await globby([
    "pages/*.js",
    "pages/*.jsx",
    "pages/*.ts",
    "content/**/*.mdx",
    "content/**/*.md",
    "content/**/*.json",
    "!pages/contact.js",
    "!content/global",
    "!pages/_*.jsx",
    "!pages/_*.js",
    "!pages/api",
    "!pages/**/[*.js",
    "!pages/**/[*.jsx",
    "!pages/**/[*.ts",
    "!pages/404.jsx",
    "!pages/404.ts",
    "!pages/404.js",
    "!pages/admin.jsx",
    "!pages/admin.ts",
    "!pages/admin.js",
    "!pages/admin/*",
    "!pages/exit-admin.jsx",
    "!pages/exit-admin.ts",
    "!pages/exit-admin.js",
  ]);

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map((page) => {
            const path = page.replace("page/", "").replace("content/", "").replace("pages/", "").replace("contact/", "").replace(".js", "").replace(".mdx", "").replace(".md", "").replace(".json", "");
            const route = path === "home" ? "" : path;

            return `
              <url>
                  <loc>${`https://www.brokenhearthorsefarm.com/${route}`}</loc>
                  <lastmod>${new Date().toISOString()}</lastmod>
                  <changefreq>monthly</changefreq>
              </url>
            `;
          })
          .join("")}
    </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  // eslint-disable-next-line no-sync
  writeFileSync("public/sitemap.xml", formatted);
}

generate();
