import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = createPageMetadata("ja", "contact");

export default function Page() {
  return (
    <SiteShell lang="ja">
      <main className="container">
        <section className="hero">
          <h1>お問い合わせ</h1>
          <p>質問やサポートが必要ですか？メッセージを送ってください。</p>
        </section>

        <div className="card" style={{ maxWidth: "600px", margin: "auto" }}>
          <form action="https://formspree.io/f/xqenplzg" method="POST">
            <label>名前</label>
            <input type="text" name="name" required className="input" placeholder="名前" />

            <label>メール</label>
            <input type="email" name="email" required className="input" placeholder="your@email.com" />

            <label>メッセージ</label>
            <textarea name="message" required rows="6" className="input" placeholder="メッセージ"></textarea>

            <button className="btn" style={{ width: "100%" }} type="submit">
              メッセージを送信
            </button>
          </form>
        </div>
      </main>
    </SiteShell>
  );
}
