import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";

export const metadata = createMetadata("tr", "contact");

export default function Page() {
  return (
    <SiteShell lang="tr">
      <main className="container">
        <section className="hero">
          <h1>Bize Ulaşın</h1>
          <p>Sorunuz mu var veya yardıma mı ihtiyacınız var? Bize mesaj gönderin.</p>
        </section>

        <div className="card" style={{ maxWidth: "600px", margin: "auto" }}>
          <form action="https://formspree.io/f/xqenplzg" method="POST">
            <label>Ad</label>
            <input type="text" name="name" required className="input" placeholder="Ad" />

            <label>E-posta</label>
            <input type="email" name="email" required className="input" placeholder="your@email.com" />

            <label>Mesaj</label>
            <textarea name="message" required rows="6" className="input" placeholder="Mesaj"></textarea>

            <button className="btn" style={{ width: "100%" }} type="submit">
              Mesaj Gönder
            </button>
          </form>
        </div>
      </main>
    </SiteShell>
  );
}
