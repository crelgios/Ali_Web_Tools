import SiteShell from "./SiteShell";
import { getText } from "../lib/translations";
import { getCategoryText } from "./ToolCategoryPages";

export default function HomePage({ lang = "en" }) {
  const t = getText(lang);
  const c = getCategoryText(lang);
  const categories = [
    { title: c.pdfCategory, desc: c.pdfDesc, link: `/${lang}/pdf-tools`, icon: "📄" },
    { title: c.imageCategory, desc: c.imageDesc, link: `/${lang}/image-tools`, icon: "🎨" }
  ];
  return (
    <SiteShell lang={lang}>
      <main className="container">
        <section className="hero">
          <h1>{c.homeTitle}</h1>
          <p>{c.homeDesc}</p>
          <a className="btn" href={`/${lang}/pdf-tools`}>🚀 {c.pdfCategory}</a>
        </section>
        <div className="trustbar"><span>⚡ {c.fast}</span><span>🔒 {c.secure}</span><span>🌍 {c.free}</span><span>📱 {c.mobile}</span></div>
        <section className="grid">
          {categories.map((item) => (
            <div className="card tool-card" key={item.title}>
              <div className="tool-icon">{item.icon}</div><h2>{item.title}</h2><p>{item.desc}</p><a className="btn" href={item.link}>{c.open}</a>
            </div>
          ))}
        </section>
        <section className="card seo-box"><h2>{t.homeTitle}</h2><p>{t.homeDesc}</p><p>{t.homeNote}</p></section>
        <div className="note">{t.homeNote}</div>
      </main>
    </SiteShell>
  );
}
