import SiteShell from "./SiteShell";
import { getText } from "../lib/translations";
import { getImageToolText } from "./ImageToolLabels";

export function getCategoryText(lang){
  const i = getImageToolText(lang);
  return {
    pdfTitle: i.pdfTitle || "PDF Tools",
    pdfDesc: i.pdfDesc || "Convert images to PDF and merge PDF files securely in your browser.",
    imageTitle: i.imageToolsTitle || "Image Tools",
    imageDesc: i.imageToolsDesc || "Edit, resize, compress and convert images without uploading files.",
    open: i.open || "Open Tool",
    homeTitle: i.homeTitle || "Free Online Tools",
    homeDesc: i.homeDesc || "Choose PDF tools or image tools. Files stay private in your browser.",
    pdfCategory: i.pdfCategory || "PDF Tools",
    imageCategory: i.imageCategory || i.imageToolsTitle || "Image Tools",
    fast: i.fast || "Fast",
    secure: i.secure || "Secure",
    free: i.free || "Free",
    mobile: i.mobile || "Mobile Friendly"
  };
}

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
