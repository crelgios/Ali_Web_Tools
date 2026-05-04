import SiteShell from "./SiteShell";
import { getText } from "../lib/translations";

export default function HomePage({ lang = "en" }) {
  const t = getText(lang);

  const tools = [
    { title: t.jpg, desc: t.jpgDesc, link: `/${lang}/jpg-to-pdf`, icon: "🖼️" },
    { title: t.png, desc: t.pngDesc, link: `/${lang}/png-to-pdf`, icon: "🌄" },
    { title: t.merge, desc: t.mergeDesc, link: `/${lang}/merge-pdf`, icon: "📎" },
    { title: t.imageEditor, desc: t.imageEditorDesc, link: `/${lang}/image-editor`, icon: "🎨" }
  ];

  return (
    <SiteShell lang={lang}>
      <main className="container">
        <section className="hero">
          <h1>{t.homeTitle}</h1>
          <p>{t.homeDesc}</p>
          <a className="btn" href={`/${lang}/jpg-to-pdf`}>🚀 {t.useTool}</a>
        </section>

        <div className="trustbar">
          <span>⚡ Fast</span>
          <span>🔒 Secure</span>
          <span>🌍 Free</span>
          <span>📱 Mobile Friendly</span>
        </div>

        <section className="grid">
          {tools.map((tool) => (
            <div className="card tool-card" key={tool.title}>
              <div className="tool-icon">{tool.icon}</div>
              <h2>{tool.title}</h2>
              <p>{tool.desc}</p>
              <a className="btn" href={tool.link}>{t.useTool}</a>
            </div>
          ))}
        </section>

        <section className="card seo-box">
          <h2>{t.homeTitle}</h2>
          <p>{t.homeDesc}</p>
          <p>{t.homeNote}</p>
        </section>

        <div className="note">{t.homeNote}</div>
      </main>
    </SiteShell>
  );
}
