import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "Frequently Asked Questions | PDF Tools",
  description: "Answers to common questions about PDF Tools.",
  alternates: {
    canonical: "/en/faq",
    languages: getTrustHreflang("faq")
  }
};

export default function Page() {
  return (
    <SiteShell lang="en">
      <main className="container">
        <section className="hero">
          <h1>Frequently Asked Questions</h1>
          <p>Answers to common questions about PDF Tools.</p>
        </section>
        <section className="faq-list">
          <div className="card faq-card"><h2>Are my files stored?</h2><p>No. Files are processed in your browser whenever possible and are not stored by us.</p></div>
<div className="card faq-card"><h2>Is this tool free?</h2><p>Yes, the basic PDF tools are free to use.</p></div>
<div className="card faq-card"><h2>Does it work on mobile?</h2><p>Yes, the website works on mobile, tablet and desktop browsers.</p></div>
<div className="card faq-card"><h2>Do I need an account?</h2><p>No signup is required.</p></div>
        </section>
      </main>
    </SiteShell>
  );
}
