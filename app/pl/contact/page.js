import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "Kontakt | PDF Tools",
  description: "Masz pytanie lub potrzebujesz pomocy? Wyślij nam wiadomość.",
  alternates: {
    canonical: "/pl/contact",
    languages: getTrustHreflang("contact")
  }
};

export default function Page() {
  return (
    <SiteShell lang="pl">
      <main className="container">
        <section className="hero">
          <h1>Kontakt</h1>
          <p>Masz pytanie lub potrzebujesz pomocy? Wyślij nam wiadomość.</p>
        </section>

        <div className="card" style={{ maxWidth: "600px", margin: "auto" }}>
          <form action="https://formspree.io/f/xqenplzg" method="POST">
            <label>Imię</label>
            <input type="text" name="name" required className="input" placeholder="Imię" />

            <label>Email</label>
            <input type="email" name="email" required className="input" placeholder="your@email.com" />

            <label>Wiadomość</label>
            <textarea name="message" required rows="6" className="input" placeholder="Wiadomość"></textarea>

            <button className="btn" style={{ width: "100%" }} type="submit">
              Wyślij wiadomość
            </button>
          </form>
        </div>
      </main>
    </SiteShell>
  );
}
