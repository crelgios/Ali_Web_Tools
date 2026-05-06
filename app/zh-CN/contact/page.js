import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";

export const metadata = createMetadata("zh-CN", "contact");

export default function Page() {
  return (
    <SiteShell lang="zh-CN">
      <main className="container">
        <section className="hero">
          <h1>联系我们</h1>
          <p>有问题或需要帮助？请给我们留言。</p>
        </section>

        <div className="card" style={{ maxWidth: "600px", margin: "auto" }}>
          <form action="https://formspree.io/f/xqenplzg" method="POST">
            <label>姓名</label>
            <input type="text" name="name" required className="input" placeholder="姓名" />

            <label>电子邮件</label>
            <input type="email" name="email" required className="input" placeholder="your@email.com" />

            <label>消息</label>
            <textarea name="message" required rows="6" className="input" placeholder="消息"></textarea>

            <button className="btn" style={{ width: "100%" }} type="submit">
              发送消息
            </button>
          </form>
        </div>
      </main>
    </SiteShell>
  );
}
