import { baseUrl, pageRoutes, supportedLanguages } from "../lib/seo";

export default function sitemap() {
  const urls = [];

  for (const lang of supportedLanguages) {
    for (const route of pageRoutes) {
      const path = route ? `/${lang}/${route}` : `/${lang}`;
      urls.push({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1 : 0.8,
      });
    }
  }

  return urls;
}
