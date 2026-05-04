import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "সাধারণ প্রশ্ন | PDF Tools",
  description: "সাধারণ প্রশ্ন",
  alternates: {
    canonical: "/bn/faq",
    languages: getTrustHreflang("faq")
  }
};

export default function Page() {
  return (
    <SiteShell lang="bn">
      <main className="container">
        <section className="hero">
          <h1>সাধারণ প্রশ্ন</h1>
          <p>সাধারণ প্রশ্ন</p>
        </section>
        <section className="faq-list">
          <div className="card faq-card"><h2>Are files stored?</h2><p>No, files are processed in your browser whenever possible.</p></div>
<div className="card faq-card"><h2>Is it free?</h2><p>Yes, basic PDF tools are free.</p></div>
<div className="card faq-card"><h2>Does it work on mobile?</h2><p>Yes, it works on mobile and desktop browsers.</p></div>
        </section>
      </main>
    </SiteShell>
  );
}
