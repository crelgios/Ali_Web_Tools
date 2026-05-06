import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = createPageMetadata("fa", "contact");

export default function Page() {
  return (
    <SiteShell lang="fa">
      <main className="container">
        <section className="hero">
          <h1>تماس با ما</h1>
          <p>سوالی دارید یا به کمک نیاز دارید؟ برای ما پیام بفرستید.</p>
        </section>

        <div className="card" style={{ maxWidth: "600px", margin: "auto" }}>
          <form action="https://formspree.io/f/xqenplzg" method="POST">
            <label>نام</label>
            <input type="text" name="name" required className="input" placeholder="نام" />

            <label>ایمیل</label>
            <input type="email" name="email" required className="input" placeholder="your@email.com" />

            <label>پیام</label>
            <textarea name="message" required rows="6" className="input" placeholder="پیام"></textarea>

            <button className="btn" style={{ width: "100%" }} type="submit">
              ارسال پیام
            </button>
          </form>
        </div>
      </main>
    </SiteShell>
  );
}
