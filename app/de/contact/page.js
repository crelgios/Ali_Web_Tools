import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = createPageMetadata("de", "contact");

export default function Page() {
  return (
    <SiteShell lang="de">
      <main className="container">
        <section className="hero">
          <h1>Kontakt</h1>
          <p>Haben Sie eine Frage oder brauchen Hilfe? Senden Sie uns eine Nachricht.</p>
        </section>

        <div className="card" style={{ maxWidth: "600px", margin: "auto" }}>
          <form action="https://formspree.io/f/xqenplzg" method="POST">
            <label>Name</label>
            <input type="text" name="name" required className="input" placeholder="Name" />

            <label>E-Mail</label>
            <input type="email" name="email" required className="input" placeholder="your@email.com" />

            <label>Nachricht</label>
            <textarea name="message" required rows="6" className="input" placeholder="Nachricht"></textarea>

            <button className="btn" style={{ width: "100%" }} type="submit">
              Nachricht senden
            </button>
          </form>
        </div>
      </main>
    </SiteShell>
  );
}
