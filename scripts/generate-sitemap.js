const sitemap = require("nextjs-sitemap-generator");
const path = require("path");

sitemap({
  baseUrl: "exprayproducciones.com",
  pagesDirectory: path.resolve(__dirname, "../pages/"),
  targetDirectory: path.resolve(__dirname, "../pages/"),
  ignoredExtensions: [
    "js",
    "ts",
    "map",
    "json",
    "xml",
    "png",
    "css",
    "jpeg",
    "jpg",
    "icon",
  ],
  ignoredPaths: ["404"]
});
