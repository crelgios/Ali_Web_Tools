import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";

export const metadata = createMetadata("ar", "contact");

export default function Page() {
  return (
    <SiteShell lang="ar">
      <main className="container">
        <section className="hero">
          <h1>اتصل بنا</h1>
          <p>هل لديك سؤال أو تحتاج إلى مساعدة؟ أرسل لنا رسالة.</p>
        </section>

        <div className="card" style={{ maxWidth: "600px", margin: "auto" }}>
          <form action="https://formspree.io/f/xqenplzg" method="POST">
            <label>الاسم</label>
            <input type="text" name="name" required className="input" placeholder="اسمك" />

            <label>البريد الإلكتروني</label>
            <input type="email" name="email" required className="input" placeholder="your@email.com" />

            <label>الرسالة</label>
            <textarea name="message" required rows="6" className="input" placeholder="اكتب رسالتك هنا"></textarea>

            <button className="btn" style={{ width: "100%" }} type="submit">
              إرسال الرسالة
            </button>
          </form>
        </div>
      </main>
    </SiteShell>
  );
}
