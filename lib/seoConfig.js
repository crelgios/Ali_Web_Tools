import { languageOptions, getText, getDir } from "./translations";
import { getImageToolText } from "../components/ImageToolLabels";
import { getTrustText } from "./trustTranslations";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ali-web-tools.vercel.app";
export const SITE_NAME = "Ali Web Tools";
export const supportedLanguages = languageOptions.map((language) => language.code);
export const defaultLanguage = "en";

export const pageSlugs = [
  "",
  "pdf-tools",
  "jpg-to-pdf",
  "png-to-pdf",
  "merge-pdf",
  "image-tools",
  "image-compressor",
  "jpg-to-png",
  "image-editor",
  "add-text-to-image",
  "blog",
  "privacy-policy",
  "terms",
  "contact",
  "faq"
];
export const blogPostSlugs = [
  "best-free-jpg-to-pdf-converter",
  "convert-excel-word-ppt-to-pdf-without-upload",
  "convert-excel-word-ppt-to-pdf-without-uploading-data",
  "convert-jpg-to-pdf-mobile",
  "jpg-to-pdf-without-software",
  "merge-pdf-online-free",
  "top-free-pdf-tools-online"
];

export const seoKeywords = {
  "jpg-to-pdf": {
    en: ["jpg to pdf", "jpg to pdf converter", "convert jpg to pdf online", "jpg to pdf free", "image to pdf"],
    "zh-CN": ["jpg转pdf", "图片转pdf", "jpg转pdf在线", "免费jpg转pdf"],
    hi: ["jpg to pdf", "jpg से pdf", "image to pdf", "jpg pdf converter"],
    es: ["jpg a pdf", "convertir jpg a pdf", "convertidor jpg a pdf gratis"],
    ar: ["تحويل jpg إلى pdf", "محول jpg إلى pdf", "jpg إلى pdf مجانا"]
  },
  "png-to-pdf": {
    en: ["png to pdf", "png to pdf converter", "convert png to pdf online", "png to pdf free"],
    "zh-CN": ["png转pdf", "png转pdf在线", "图片转pdf"],
    hi: ["png to pdf", "png से pdf", "png pdf converter"],
    es: ["png a pdf", "convertir png a pdf", "convertidor png a pdf"],
    ar: ["تحويل png إلى pdf", "محول png إلى pdf"]
  },
  "merge-pdf": {
    en: ["merge pdf", "pdf merger", "combine pdf files", "merge pdf online free"],
    "zh-CN": ["合并pdf", "pdf合并", "在线合并pdf"],
    hi: ["merge pdf", "pdf मिलाएं", "pdf merger"],
    es: ["unir pdf", "combinar pdf", "unir pdf gratis"],
    ar: ["دمج pdf", "جمع ملفات pdf", "دمج pdf مجانا"]
  },
  "image-compressor": {
    en: ["image compressor", "compress image online", "reduce image size", "compress jpg"],
    "zh-CN": ["图片压缩", "在线压缩图片", "压缩jpg"],
    hi: ["image compressor", "image compress", "photo size reduce"],
    es: ["comprimir imagen", "compresor de imagen", "reducir tamaño imagen"],
    ar: ["ضغط الصور", "ضاغط الصور", "تقليل حجم الصورة"]
  },
  "jpg-to-png": {
    en: ["jpg to png", "convert jpg to png", "jpg to png converter"],
    "zh-CN": ["jpg转png", "jpg转png在线"],
    hi: ["jpg to png", "jpg से png"],
    es: ["jpg a png", "convertir jpg a png"],
    ar: ["تحويل jpg إلى png"]
  }
};

function cleanBaseUrl() { return SITE_URL.replace(/\/$/, ""); }
export function buildUrl(path = "") { const clean = path ? (path.startsWith("/") ? path : `/${path}`) : ""; return `${cleanBaseUrl()}${clean}`; }
export function normalizeLang(lang) { return supportedLanguages.includes(lang) ? lang : defaultLanguage; }
export function localizedPath(lang, slug = "") { const code = normalizeLang(lang); return slug ? `/${code}/${slug}` : `/${code}`; }
export function getLocalizedAlternates(slug = "") { const languages = {}; for (const language of supportedLanguages) languages[language] = buildUrl(localizedPath(language, slug)); languages["x-default"] = buildUrl(localizedPath(defaultLanguage, slug)); return languages; }

export function getPageSeo(lang = defaultLanguage, slug = "") {
  const code = normalizeLang(lang);
  const t = getText(code); const i = getImageToolText(code); const trust = getTrustText(code);
  const map = {
    "": { title: i.homeTitle || t.homeTitle, description: i.homeDesc || t.homeDesc },
    "pdf-tools": { title: i.pdfTitle || t.homeTitle, description: i.pdfDesc || t.homeDesc },
    "jpg-to-pdf": { title: t.jpg, description: t.jpgDesc },
    "png-to-pdf": { title: t.png, description: t.pngDesc },
    "merge-pdf": { title: t.merge, description: t.mergeDesc },
    "image-tools": { title: i.imageToolsTitle, description: i.imageToolsDesc },
    "image-compressor": { title: i.compressTitle, description: i.compressDesc },
    "jpg-to-png": { title: i.convertTitle, description: i.convertDesc },
    "image-editor": { title: i.imageToolsTitle || "Image Editor", description: i.imageToolsDesc || "Free online image editor." },
    "add-text-to-image": { title: code === "zh-CN" ? "给图片添加文字" : code === "hi" ? "इमेज में टेक्स्ट जोड़ें" : code === "es" ? "Añadir texto a imagen" : "Add Text to Image", description: code === "zh-CN" ? "在浏览器中给照片添加文字，无需上传文件。" : code === "hi" ? "बिना अपलोड किए फोटो में टेक्स्ट जोड़ें।" : code === "es" ? "Añade texto a fotos online sin subir archivos." : "Add text to photos online without uploading files." },
    "blog": { title: code === "zh-CN" ? "博客" : code === "hi" ? "ब्लॉग" : code === "ar" ? "المدونة" : "Blog", description: t.homeDesc },
    "privacy-policy": { title: trust.privacyTitle, description: trust.privacyDesc },
    "terms": { title: trust.termsTitle, description: trust.termsDesc },
    "contact": { title: trust.contactTitle, description: trust.contactDesc },
    "faq": { title: trust.faqTitle, description: trust.faqDesc }
  };
  const base = map[slug] || map[""];
  const keywords = seoKeywords[slug]?.[code] || seoKeywords[slug]?.en || [];
  return { ...base, keywords };
}

export function createMetadata(lang = defaultLanguage, slug = "") {
  const code = normalizeLang(lang); const seo = getPageSeo(code, slug); const path = localizedPath(code, slug);
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    metadataBase: new URL(cleanBaseUrl()),
    alternates: { canonical: buildUrl(path), languages: getLocalizedAlternates(slug) },
    openGraph: { title: seo.title, description: seo.description, url: buildUrl(path), siteName: SITE_NAME, locale: code.replace('-', '_'), type: 'website' },
    twitter: { card: 'summary', title: seo.title, description: seo.description },
    robots: { index: true, follow: true }
  };
}

export function allSeoRoutes() {
  const routes = ["", ...pageSlugs.filter(Boolean), ...blogPostSlugs.map((slug) => `blog/${slug}`)];
  const unique = Array.from(new Set(routes));
  const items = [{ url: buildUrl("/"), changeFrequency: "daily", priority: 1 }];
  for (const language of supportedLanguages) {
    for (const slug of unique) {
      const priority = slug === "" ? 1 : slug.startsWith("blog/") ? 0.65 : 0.85;
      items.push({ url: buildUrl(localizedPath(language, slug)), lastModified: new Date(), changeFrequency: slug.startsWith("blog/") ? "weekly" : "monthly", priority });
    }
  }
  return items;
}

export function createBlogMetadata(lang = defaultLanguage, postSlug = "") {
  const code = normalizeLang(lang);
  const titleMap = {
    "jpg-to-pdf-without-software": { en: "How to Convert JPG to PDF Without Software", "zh-CN": "无需软件将 JPG 转换为 PDF", hi: "बिना सॉफ्टवेयर JPG को PDF में बदलें", es: "Convertir JPG a PDF sin software", ar: "تحويل JPG إلى PDF بدون برامج" },
    "convert-jpg-to-pdf-mobile": { en: "Convert JPG to PDF on Mobile", "zh-CN": "在手机上将 JPG 转换为 PDF", hi: "मोबाइल पर JPG को PDF में बदलें", es: "Convertir JPG a PDF en móvil", ar: "تحويل JPG إلى PDF على الهاتف" },
    "best-free-jpg-to-pdf-converter": { en: "Best Free JPG to PDF Converter", "zh-CN": "最佳免费 JPG 转 PDF 工具", hi: "Best Free JPG to PDF Converter", es: "Mejor convertidor JPG a PDF gratis", ar: "أفضل محول JPG إلى PDF مجاني" },
    "merge-pdf-online-free": { en: "Merge PDF Online Free", "zh-CN": "免费在线合并 PDF", hi: "PDF ऑनलाइन मुफ्त में मिलाएं", es: "Unir PDF online gratis", ar: "دمج PDF أونلاين مجاناً" },
    "top-free-pdf-tools-online": { en: "Top Free PDF Tools Online", "zh-CN": "最佳免费在线 PDF 工具", hi: "Top Free PDF Tools Online", es: "Mejores herramientas PDF gratis", ar: "أفضل أدوات PDF مجانية" },
    "convert-excel-word-ppt-to-pdf-without-upload": { en: "Convert Office Files to PDF Without Upload", "zh-CN": "无需上传将 Office 文件转 PDF", hi: "Office files को बिना upload PDF में बदलें", es: "Convertir archivos Office a PDF sin subirlos", ar: "تحويل ملفات Office إلى PDF دون رفع" },
    "convert-excel-word-ppt-to-pdf-without-uploading-data": { en: "Convert Excel Word PPT to PDF Without Uploading Data", "zh-CN": "无需上传数据将 Excel Word PPT 转 PDF", hi: "Excel Word PPT को बिना data upload PDF बनाएं", es: "Convertir Excel Word PPT a PDF sin subir datos", ar: "تحويل Excel Word PPT إلى PDF دون رفع البيانات" }
  };
  const title = titleMap[postSlug]?.[code] || titleMap[postSlug]?.en || "PDF Tools Guide";
  const description = code === "zh-CN" ? "免费、安全的 PDF 和图片工具指南。" : code === "hi" ? "मुफ्त और सुरक्षित PDF/image tools guide." : code === "es" ? "Guía gratuita y segura de herramientas PDF e imagen." : code === "ar" ? "دليل أدوات PDF والصور المجانية والآمنة." : "Helpful guide for free, secure PDF and image tools.";
  const slug = postSlug ? `blog/${postSlug}` : "blog";
  return {
    title, description, metadataBase: new URL(cleanBaseUrl()),
    alternates: { canonical: buildUrl(localizedPath(code, slug)), languages: getLocalizedAlternates(slug) },
    openGraph: { title, description, url: buildUrl(localizedPath(code, slug)), siteName: SITE_NAME, locale: code.replace('-', '_'), type: 'article' },
    twitter: { card: 'summary', title, description }, robots: { index: true, follow: true }
  };
}
