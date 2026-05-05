import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "Contact | Ali W Vide",
  description: "Heb je een vraag of hulp nodig? Stuur ons een bericht.",
  alternates: {
    canonical: "/nl/contact",
    languages: getTrustHreflang("contact")
  }
};

export default function Page() {
  return (
    <SiteShell lang="nl">
      <main className="container">
        <section className="hero">
          <h1>Contact</h1>
          <p>Heb je een vraag of hulp nodig? Stuur ons een bericht.</p>
        </section>

        <div className="card" style={{ maxWidth: "600px", margin: "auto" }}>
          <form action="https://formspree.io/f/xqenplzg" method="POST">
            <label>Naam</label>
            <input type="text" name="name" required className="input" placeholder="Naam" />

            <label>E-mail</label>
            <input type="email" name="email" required className="input" placeholder="your@email.com" />

            <label>Bericht</label>
            <textarea name="message" required rows="6" className="input" placeholder="Bericht"></textarea>

            <button className="btn" style={{ width: "100%" }} type="submit">
              Bericht verzenden
            </button>
          </form>
        </div>
      </main>
    </SiteShell>
  );
}
