export default function sitemap() {
  const baseUrl = "https://ali-web-tools.vercel.app";

  const languages = [
    "en", "zh-CN", "es", "hi", "ar", "pt", "fr", "de", "ja", "ru",
    "id", "tr", "ko", "it", "nl", "pl", "th", "vi", "bn", "ur", "fa", "ms"
  ];

  const pages = [
    "",
    "jpg-to-pdf",
    "png-to-pdf",
    "merge-pdf",
    "privacy-policy",
    "terms",
    "contact",
    "faq"
  ];

  const routes = languages.flatMap((lang) =>
    pages.map((page) => page ? `/${lang}/${page}` : `/${lang}`)
  );

  routes.push("/en/blog");
  routes.push("/en/blog/jpg-to-pdf-without-software");
  routes.push("/en/blog/convert-jpg-to-pdf-mobile");
  routes.push("/en/blog/best-free-jpg-to-pdf-converter");
  routes.push("/en/blog/merge-pdf-online-free");
  routes.push("/en/blog/top-free-pdf-tools-online");

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}