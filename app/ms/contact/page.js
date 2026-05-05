import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "Hubungi Kami | Ali W Vide",
  description: "Ada soalan atau perlukan bantuan? Hantar mesej kepada kami.",
  alternates: {
    canonical: "/ms/contact",
    languages: getTrustHreflang("contact")
  }
};

export default function Page() {
  return (
    <SiteShell lang="ms">
      <main className="container">
        <section className="hero">
          <h1>Hubungi Kami</h1>
          <p>Ada soalan atau perlukan bantuan? Hantar mesej kepada kami.</p>
        </section>

        <div className="card" style={{ maxWidth: "600px", margin: "auto" }}>
          <form action="https://formspree.io/f/xqenplzg" method="POST">
            <label>Nama</label>
            <input type="text" name="name" required className="input" placeholder="Nama" />

            <label>E-mel</label>
            <input type="email" name="email" required className="input" placeholder="your@email.com" />

            <label>Mesej</label>
            <textarea name="message" required rows="6" className="input" placeholder="Mesej"></textarea>

            <button className="btn" style={{ width: "100%" }} type="submit">
              Hantar Mesej
            </button>
          </form>
        </div>
      </main>
    </SiteShell>
  );
}
