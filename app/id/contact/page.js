import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "Hubungi Kami | Ali W Vide",
  description: "Punya pertanyaan atau butuh bantuan? Kirim pesan kepada kami.",
  alternates: {
    canonical: "/id/contact",
    languages: getTrustHreflang("contact")
  }
};

export default function Page() {
  return (
    <SiteShell lang="id">
      <main className="container">
        <section className="hero">
          <h1>Hubungi Kami</h1>
          <p>Punya pertanyaan atau butuh bantuan? Kirim pesan kepada kami.</p>
        </section>

        <div className="card" style={{ maxWidth: "600px", margin: "auto" }}>
          <form action="https://formspree.io/f/xqenplzg" method="POST">
            <label>Nama</label>
            <input type="text" name="name" required className="input" placeholder="Nama" />

            <label>Email</label>
            <input type="email" name="email" required className="input" placeholder="your@email.com" />

            <label>Pesan</label>
            <textarea name="message" required rows="6" className="input" placeholder="Pesan"></textarea>

            <button className="btn" style={{ width: "100%" }} type="submit">
              Kirim Pesan
            </button>
          </form>
        </div>
      </main>
    </SiteShell>
  );
}
