import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";

export const metadata = createMetadata("it", "contact");

export default function Page() {
  return (
    <SiteShell lang="it">
      <main className="container">
        <section className="hero">
          <h1>Contattaci</h1>
          <p>Hai una domanda o bisogno di aiuto? Inviaci un messaggio.</p>
        </section>

        <div className="card" style={{ maxWidth: "600px", margin: "auto" }}>
          <form action="https://formspree.io/f/xqenplzg" method="POST">
            <label>Nome</label>
            <input type="text" name="name" required className="input" placeholder="Nome" />

            <label>Email</label>
            <input type="email" name="email" required className="input" placeholder="your@email.com" />

            <label>Messaggio</label>
            <textarea name="message" required rows="6" className="input" placeholder="Messaggio"></textarea>

            <button className="btn" style={{ width: "100%" }} type="submit">
              Invia messaggio
            </button>
          </form>
        </div>
      </main>
    </SiteShell>
  );
}
