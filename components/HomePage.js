import SiteShell from "./SiteShell";
import { getText } from "../lib/translations";

export default function HomePage({ lang = "en" }) {
  const t = getText(lang);

  const tools = [
    { title: t.jpg, desc: t.jpgDesc, link: `/${lang}/jpg-to-pdf` },
    { title: t.png, desc: t.pngDesc, link: `/${lang}/png-to-pdf` },
    { title: t.merge, desc: t.mergeDesc, link: `/${lang}/merge-pdf` }
  ];

  return (
    <SiteShell lang={lang}>
      <main className="container">
        <section className="hero">
          <h1>{t.homeTitle}</h1>
          <p>{t.homeDesc}</p>
        </section>

        <section className="grid">
          {tools.map((tool) => (
            <div className="card" key={tool.title}>
              <h2>{tool.title}</h2>
              <p>{tool.desc}</p>
              <a className="btn" href={tool.link}>{t.useTool}</a>
            </div>
          ))}
        </section>

        <div className="note">{t.homeNote}</div>
      </main>
    </SiteShell>
  );
}
