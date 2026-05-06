import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";

export const metadata = createMetadata("th", "contact");

export default function Page() {
  return (
    <SiteShell lang="th">
      <main className="container">
        <section className="hero">
          <h1>ติดต่อเรา</h1>
          <p>มีคำถามหรือต้องการความช่วยเหลือ? ส่งข้อความถึงเรา</p>
        </section>

        <div className="card" style={{ maxWidth: "600px", margin: "auto" }}>
          <form action="https://formspree.io/f/xqenplzg" method="POST">
            <label>ชื่อ</label>
            <input type="text" name="name" required className="input" placeholder="ชื่อ" />

            <label>อีเมล</label>
            <input type="email" name="email" required className="input" placeholder="your@email.com" />

            <label>ข้อความ</label>
            <textarea name="message" required rows="6" className="input" placeholder="ข้อความ"></textarea>

            <button className="btn" style={{ width: "100%" }} type="submit">
              ส่งข้อความ
            </button>
          </form>
        </div>
      </main>
    </SiteShell>
  );
}
