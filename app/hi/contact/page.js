import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = createPageMetadata("hi", "contact");

export default function Page() {
  return (
    <SiteShell lang="hi">
      <main className="container">
        <section className="hero">
          <h1>हमसे संपर्क करें</h1>
          <p>कोई सवाल है या मदद चाहिए? हमें संदेश भेजें।</p>
        </section>

        <div className="card" style={{ maxWidth: "600px", margin: "auto" }}>
          <form action="https://formspree.io/f/xqenplzg" method="POST">
            <label>नाम</label>
            <input type="text" name="name" required className="input" placeholder="आपका नाम" />

            <label>ईमेल</label>
            <input type="email" name="email" required className="input" placeholder="your@email.com" />

            <label>संदेश</label>
            <textarea name="message" required rows="6" className="input" placeholder="अपना संदेश यहां लिखें"></textarea>

            <button className="btn" style={{ width: "100%" }} type="submit">
              संदेश भेजें
            </button>
          </form>
        </div>
      </main>
    </SiteShell>
  );
}
