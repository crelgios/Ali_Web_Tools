import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "ہم سے رابطہ کریں | Ali W Vide",
  description: "کوئی سوال ہے یا مدد چاہیے؟ ہمیں پیغام بھیجیں۔",
  alternates: {
    canonical: "/ur/contact",
    languages: getTrustHreflang("contact")
  }
};

export default function Page() {
  return (
    <SiteShell lang="ur">
      <main className="container">
        <section className="hero">
          <h1>ہم سے رابطہ کریں</h1>
          <p>کوئی سوال ہے یا مدد چاہیے؟ ہمیں پیغام بھیجیں۔</p>
        </section>

        <div className="card" style={{ maxWidth: "600px", margin: "auto" }}>
          <form action="https://formspree.io/f/xqenplzg" method="POST">
            <label>نام</label>
            <input type="text" name="name" required className="input" placeholder="نام" />

            <label>ای میل</label>
            <input type="email" name="email" required className="input" placeholder="your@email.com" />

            <label>پیغام</label>
            <textarea name="message" required rows="6" className="input" placeholder="پیغام"></textarea>

            <button className="btn" style={{ width: "100%" }} type="submit">
              پیغام بھیجیں
            </button>
          </form>
        </div>
      </main>
    </SiteShell>
  );
}
