import SiteShell from "../../../components/SiteShell";
import { getTrustText, getTrustHreflang } from "../../../lib/trustTranslations";

const trust = getTrustText("zh-CN");

export const metadata = {
  title: `${trust.faqTitle} | Ali W Vide`,
  description: trust.faqDesc,
  alternates: {
    canonical: "/zh-CN/faq",
    languages: getTrustHreflang("faq")
  }
};

export default function Page() {
  return (
    <SiteShell lang="zh-CN">
      <main className="container">
        <section className="hero">
          <h1>{trust.faqTitle}</h1>
          <p>{trust.faqDesc}</p>
        </section>
        <section className="faq-list">
          {trust.faq.map(([q, a]) => (
            <div className="card faq-card" key={q}>
              <h2>{q}</h2>
              <p>{a}</p>
            </div>
          ))}
        </section>
      </main>
    </SiteShell>
  );
}
