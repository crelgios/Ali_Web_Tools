import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "যোগাযোগ করুন | PDF Tools",
  description: "কোনো প্রশ্ন আছে বা সাহায্য দরকার? আমাদের বার্তা পাঠান।",
  alternates: {
    canonical: "/bn/contact",
    languages: getTrustHreflang("contact")
  }
};

export default function Page() {
  return (
    <SiteShell lang="bn">
      <main className="container">
        <section className="hero">
          <h1>যোগাযোগ করুন</h1>
          <p>কোনো প্রশ্ন আছে বা সাহায্য দরকার? আমাদের বার্তা পাঠান।</p>
        </section>

        <div className="card" style={{ maxWidth: "600px", margin: "auto" }}>
          <form action="https://formspree.io/f/xqenplzg" method="POST">
            <label>নাম</label>
            <input type="text" name="name" required className="input" placeholder="নাম" />

            <label>ইমেইল</label>
            <input type="email" name="email" required className="input" placeholder="your@email.com" />

            <label>বার্তা</label>
            <textarea name="message" required rows="6" className="input" placeholder="বার্তা"></textarea>

            <button className="btn" style={{ width: "100%" }} type="submit">
              বার্তা পাঠান
            </button>
          </form>
        </div>
      </main>
    </SiteShell>
  );
}
