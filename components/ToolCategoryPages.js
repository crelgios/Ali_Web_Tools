import SiteShell from "./SiteShell";
import { getText } from "../lib/translations";
import { getImageToolText } from "./ImageToolLabels";

export function getCategoryText(lang){
  const i = getImageToolText(lang);
  return {
    pdfTitle: i.pdfTitle, pdfDesc: i.pdfDesc, imageTitle: i.imageToolsTitle, imageDesc: i.imageToolsDesc,
    open: i.open, homeTitle: i.homeTitle, homeDesc: i.homeDesc, pdfCategory: i.pdfCategory, imageCategory: i.imageCategory,
    fast: i.fast, secure: i.secure, free: i.free, mobile: i.mobile
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
  const i = getImageToolText(lang);
  const tools = [
    { title: i.compressTitle, desc: i.compressDesc, href: `/${lang}/image-compressor`, icon: "🗜️" },
    { title: i.convertTitle, desc: i.convertDesc, href: `/${lang}/jpg-to-png`, icon: "🔁" }
  ];
  return <SiteShell lang={lang}><main className="container"><section className="hero"><h1>{i.imageToolsTitle}</h1><p>{i.imageToolsDesc}</p></section><section className="grid">{tools.map(tool => <div className="card tool-card" key={tool.href}><div className="tool-icon">{tool.icon}</div><h2>{tool.title}</h2><p>{tool.desc}</p><a className="btn" href={tool.href}>{i.open}</a></div>)}</section><div className="note">🔒 {i.privacy}</div></main></SiteShell>;
}
