import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "문의하기 | PDF Tools",
  description: "질문이 있거나 도움이 필요하신가요? 메시지를 보내주세요.",
  alternates: {
    canonical: "/ko/contact",
    languages: getTrustHreflang("contact")
  }
};

export default function Page() {
  return (
    <SiteShell lang="ko">
      <main className="container">
        <section className="hero">
          <h1>문의하기</h1>
          <p>질문이 있거나 도움이 필요하신가요? 메시지를 보내주세요.</p>
        </section>

        <div className="card" style={{ maxWidth: "600px", margin: "auto" }}>
          <form action="https://formspree.io/f/xqenplzg" method="POST">
            <label>이름</label>
            <input type="text" name="name" required className="input" placeholder="이름" />

            <label>이메일</label>
            <input type="email" name="email" required className="input" placeholder="your@email.com" />

            <label>메시지</label>
            <textarea name="message" required rows="6" className="input" placeholder="메시지"></textarea>

            <button className="btn" style={{ width: "100%" }} type="submit">
              메시지 보내기
            </button>
          </form>
        </div>
      </main>
    </SiteShell>
  );
}
