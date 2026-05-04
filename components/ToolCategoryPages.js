import SiteShell from "./SiteShell";
import { getText } from "../lib/translations";

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
  const tools = [
    { title: c.imageTitle, desc: c.imageDesc, href: `/${lang}/image-editor`, icon: "🎨" },
    { title: labelsFor(lang).resize, desc: labelsFor(lang).resizeDesc, href: `/${lang}/resize-image`, icon: "📐" },
    { title: labelsFor(lang).textTool, desc: labelsFor(lang).textToolDesc, href: `/${lang}/add-text-to-image`, icon: "✍️" },
    { title: labelsFor(lang).compress, desc: labelsFor(lang).compressDesc, href: `/${lang}/image-compressor`, icon: "🗜️" },
    { title: labelsFor(lang).convert, desc: labelsFor(lang).convertDesc, href: `/${lang}/jpg-to-png`, icon: "🔁" }
  ];
  return <SiteShell lang={lang}><main className="container"><section className="hero"><h1>{c.imageTitle}</h1><p>{c.imageDesc}</p></section><section className="grid">{tools.map(tool => <div className="card tool-card" key={tool.title}><div className="tool-icon">{tool.icon}</div><h2>{tool.title}</h2><p>{tool.desc}</p><a className="btn" href={tool.href}>{c.open}</a></div>)}</section><div className="note">🔒 {labelsFor(lang).privacy}</div></main></SiteShell>;
}

function labelsFor(lang){
  const m={
    en:{resize:"Resize Image",resizeDesc:"Set exact width and height using input boxes.",compress:"Compress Image",compressDesc:"Reduce image size for fast sharing and SEO.",convert:"JPG to PNG Converter",convertDesc:"Convert JPG, PNG and WebP images in your browser.",textTool:"Add Text to Image",textToolDesc:"Write text on your image and download it instantly.",privacy:"Images are processed locally in your browser."},
    hi:{resize:"इमेज रीसाइज़",resizeDesc:"Width और height input box से exact size सेट करें।",compress:"इमेज कंप्रेस",compressDesc:"फाइल साइज कम करें।",convert:"JPG से PNG कन्वर्टर",convertDesc:"JPG, PNG और WebP को ब्राउज़र में बदलें।",textTool:"इमेज पर टेक्स्ट",textToolDesc:"इमेज पर टेक्स्ट लिखें और तुरंत डाउनलोड करें।",privacy:"इमेज आपके ब्राउज़र में ही प्रोसेस होती है।"},
    ar:{resize:"تغيير حجم الصورة",resizeDesc:"حدد العرض والارتفاع بدقة.",compress:"ضغط الصورة",compressDesc:"قلل حجم الصورة للمشاركة السريعة.",convert:"محول JPG إلى PNG",convertDesc:"حوّل JPG وPNG وWebP داخل المتصفح.",textTool:"إضافة نص للصورة",textToolDesc:"اكتب نصاً على الصورة ونزّلها فوراً.",privacy:"تتم معالجة الصور محلياً في المتصفح."},
    "zh-CN":{resize:"调整图片大小",resizeDesc:"使用输入框设置准确宽高。",compress:"压缩图片",compressDesc:"减小图片大小，方便分享。",convert:"JPG 转 PNG",convertDesc:"在浏览器中转换 JPG、PNG 和 WebP。",textTool:"给图片添加文字",textToolDesc:"在图片上写文字并立即下载。",privacy:"图片在浏览器中本地处理。"}
  }; return m[lang] || m.en;
}
