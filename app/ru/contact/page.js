import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "Связаться с нами | PDF Tools",
  description: "Есть вопрос или нужна помощь? Отправьте нам сообщение.",
  alternates: {
    canonical: "/ru/contact",
    languages: getTrustHreflang("contact")
  }
};

export default function Page() {
  return (
    <SiteShell lang="ru">
      <main className="container">
        <section className="hero">
          <h1>Связаться с нами</h1>
          <p>Есть вопрос или нужна помощь? Отправьте нам сообщение.</p>
        </section>

        <div className="card" style={{ maxWidth: "600px", margin: "auto" }}>
          <form action="https://formspree.io/f/xqenplzg" method="POST">
            <label>Имя</label>
            <input type="text" name="name" required className="input" placeholder="Имя" />

            <label>Email</label>
            <input type="email" name="email" required className="input" placeholder="your@email.com" />

            <label>Сообщение</label>
            <textarea name="message" required rows="6" className="input" placeholder="Сообщение"></textarea>

            <button className="btn" style={{ width: "100%" }} type="submit">
              Отправить сообщение
            </button>
          </form>
        </div>
      </main>
    </SiteShell>
  );
}
