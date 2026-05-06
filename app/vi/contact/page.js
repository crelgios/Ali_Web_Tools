import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";

export const metadata = createMetadata("vi", "contact");

export default function Page() {
  return (
    <SiteShell lang="vi">
      <main className="container">
        <section className="hero">
          <h1>Liên hệ</h1>
          <p>Bạn có câu hỏi hoặc cần trợ giúp? Hãy gửi tin nhắn cho chúng tôi.</p>
        </section>

        <div className="card" style={{ maxWidth: "600px", margin: "auto" }}>
          <form action="https://formspree.io/f/xqenplzg" method="POST">
            <label>Tên</label>
            <input type="text" name="name" required className="input" placeholder="Tên" />

            <label>Email</label>
            <input type="email" name="email" required className="input" placeholder="your@email.com" />

            <label>Tin nhắn</label>
            <textarea name="message" required rows="6" className="input" placeholder="Tin nhắn"></textarea>

            <button className="btn" style={{ width: "100%" }} type="submit">
              Gửi tin nhắn
            </button>
          </form>
        </div>
      </main>
    </SiteShell>
  );
}
