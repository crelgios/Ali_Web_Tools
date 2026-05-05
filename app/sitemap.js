export default function sitemap() {
  const baseUrl = "https://ali-web-tools.vercel.app";

  const languages = [
    "en","zh-CN","es","hi","ar","pt","fr","de","ja","ru",
    "id","tr","ko","it","nl","pl","th","vi","bn","ur","fa","ms"
  ];

  const pages = [
    "",
    "jpg-to-pdf",
    "png-to-pdf",
    "merge-pdf",
    "image-compressor",
    "jpg-to-png",
    "privacy-policy",
    "terms",
    "contact",
    "faq"
  ];

  const routes = languages.flatMap(lang =>
    pages.map(page => page ? `/${lang}/${page}` : `/${lang}`)
  );

  routes.push("/en/blog");

  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}