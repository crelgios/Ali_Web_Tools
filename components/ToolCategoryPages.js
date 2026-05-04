import SiteShell from "./SiteShell";
import { getText } from "../lib/translations";
import { getImageToolText } from "./ImageToolLabels";

const labelMap = {
  en: { pdfTitle: "PDF Tools", pdfDesc: "Convert images to PDF and merge PDF files securely in your browser.", imageTitle: "Image Tools", imageDesc: "Edit, resize, compress and convert images without uploading files.", open: "Open Tool", homeTitle: "Free Online Tools", homeDesc: "Choose PDF tools or image tools. Files stay private in your browser.", pdfCategory: "PDF Tools", imageCategory: "Image Tools" },
  hi: { pdfTitle: "PDF टूल्स", pdfDesc: "इमेज को PDF में बदलें और PDF फाइलों को सुरक्षित तरीके से मिलाएं।", imageTitle: "इमेज टूल्स", imageDesc: "इमेज एडिट, रीसाइज़, कंप्रेस और कन्वर्ट करें बिना अपलोड किए।", open: "टूल खोलें", homeTitle: "मुफ्त ऑनलाइन टूल्स", homeDesc: "PDF टूल्स या इमेज टूल्स चुनें। फाइलें ब्राउज़र में सुरक्षित रहती हैं।", pdfCategory: "PDF टूल्स", imageCategory: "इमेज टूल्स" },
  ar: { pdfTitle: "أدوات PDF", pdfDesc: "حوّل الصور إلى PDF وادمج ملفات PDF بأمان داخل المتصفح.", imageTitle: "أدوات الصور", imageDesc: "حرر الصور وغيّر حجمها واضغطها وحوّلها بدون رفع الملفات.", open: "افتح الأداة", homeTitle: "أدوات مجانية على الإنترنت", homeDesc: "اختر أدوات PDF أو أدوات الصور. تبقى الملفات خاصة داخل المتصفح.", pdfCategory: "أدوات PDF", imageCategory: "أدوات الصور" },
  "zh-CN": { pdfTitle: "PDF 工具", pdfDesc: "在浏览器中安全地将图片转为 PDF 并合并 PDF。", imageTitle: "图片工具", imageDesc: "无需上传即可编辑、调整、压缩和转换图片。", open: "打开工具", homeTitle: "免费在线工具", homeDesc: "选择 PDF 工具或图片工具。文件保留在浏览器中。", pdfCategory: "PDF 工具", imageCategory: "图片工具" },
  es: { pdfTitle: "Herramientas PDF", pdfDesc: "Convierte imágenes a PDF y une PDF en tu navegador.", imageTitle: "Herramientas de imagen", imageDesc: "Edita, redimensiona, comprime y convierte imágenes sin subir archivos.", open: "Abrir herramienta", homeTitle: "Herramientas gratis online", homeDesc: "Elige herramientas PDF o de imagen. Tus archivos quedan en el navegador.", pdfCategory: "Herramientas PDF", imageCategory: "Herramientas de imagen" },
  fr: { pdfTitle: "Outils PDF", pdfDesc: "Convertissez des images en PDF et fusionnez des PDF dans le navigateur.", imageTitle: "Outils d’image", imageDesc: "Modifiez, redimensionnez, compressez et convertissez sans envoi.", open: "Ouvrir l’outil", homeTitle: "Outils gratuits en ligne", homeDesc: "Choisissez des outils PDF ou image. Les fichiers restent dans votre navigateur.", pdfCategory: "Outils PDF", imageCategory: "Outils d’image" },
  de: { pdfTitle: "PDF-Tools", pdfDesc: "Bilder in PDF umwandeln und PDFs im Browser zusammenführen.", imageTitle: "Bild-Tools", imageDesc: "Bilder bearbeiten, skalieren, komprimieren und konvertieren ohne Upload.", open: "Tool öffnen", homeTitle: "Kostenlose Online-Tools", homeDesc: "Wählen Sie PDF- oder Bild-Tools. Dateien bleiben im Browser.", pdfCategory: "PDF-Tools", imageCategory: "Bild-Tools" }
};
export function getCategoryText(lang){ return labelMap[lang] || labelMap.en; }

export function PdfToolsPage({ lang = "en" }) {
  const t = getText(lang); const c = getCategoryText(lang);
  const tools = [
    { title: t.jpg, desc: t.jpgDesc, href: `/${lang}/jpg-to-pdf`, icon: "🖼️" },
    { title: t.png, desc: t.pngDesc, href: `/${lang}/png-to-pdf`, icon: "🌄" },
    { title: t.merge, desc: t.mergeDesc, href: `/${lang}/merge-pdf`, icon: "📎" }
  ];
  return <SiteShell lang={lang}><main className="container"><section className="hero"><h1>{c.pdfTitle}</h1><p>{c.pdfDesc}</p></section><section className="grid">{tools.map(tool => <div className="card tool-card" key={tool.href}><div className="tool-icon">{tool.icon}</div><h2>{tool.title}</h2><p>{tool.desc}</p><a className="btn" href={tool.href}>{c.open}</a></div>)}</section><div className="note">{t.homeNote}</div></main></SiteShell>;
}

export function ImageToolsPage({ lang = "en" }) {
  const c = getCategoryText(lang);
  const i = getImageToolText(lang);
  const tools = [
    { title: i.cropTitle, desc: i.cropDesc, href: `/${lang}/crop-image`, icon: "✂️" },
    { title: i.resizeTitle, desc: i.resizeDesc, href: `/${lang}/resize-image`, icon: "📐" },
    { title: i.compressTitle, desc: i.compressDesc, href: `/${lang}/image-compressor`, icon: "🗜️" },
    { title: i.convertTitle, desc: i.convertDesc, href: `/${lang}/jpg-to-png`, icon: "🔁" }
  ];
  return <SiteShell lang={lang}><main className="container"><section className="hero"><h1>{i.imageToolsTitle || c.imageTitle}</h1><p>{i.imageToolsDesc || c.imageDesc}</p></section><section className="grid">{tools.map(tool => <div className="card tool-card" key={tool.href}><div className="tool-icon">{tool.icon}</div><h2>{tool.title}</h2><p>{tool.desc}</p><a className="btn" href={tool.href}>{c.open}</a></div>)}</section><div className="note">🔒 {i.privacy}</div></main></SiteShell>;
}
