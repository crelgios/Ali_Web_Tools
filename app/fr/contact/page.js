import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "Contactez-nous | PDF Tools",
  description: "Une question ou besoin d’aide ? Envoyez-nous un message.",
  alternates: {
    canonical: "/fr/contact",
    languages: getTrustHreflang("contact")
  }
};

export default function Page() {
  return (
    <SiteShell lang="fr">
      <main className="container">
        <section className="hero">
          <h1>Contactez-nous</h1>
          <p>Une question ou besoin d’aide ? Envoyez-nous un message.</p>
        </section>

        <div className="card" style={{ maxWidth: "600px", margin: "auto" }}>
          <form action="https://formspree.io/f/xqenplzg" method="POST">
            <label>Nom</label>
            <input type="text" name="name" required className="input" placeholder="Nom" />

            <label>Email</label>
            <input type="email" name="email" required className="input" placeholder="your@email.com" />

            <label>Message</label>
            <textarea name="message" required rows="6" className="input" placeholder="Message"></textarea>

            <button className="btn" style={{ width: "100%" }} type="submit">
              Envoyer le message
            </button>
          </form>
        </div>
      </main>
    </SiteShell>
  );
}
