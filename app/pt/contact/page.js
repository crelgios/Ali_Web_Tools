import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "Fale Conosco | PDF Tools",
  description: "Tem uma pergunta ou precisa de ajuda? Envie uma mensagem.",
  alternates: {
    canonical: "/pt/contact",
    languages: getTrustHreflang("contact")
  }
};

export default function Page() {
  return (
    <SiteShell lang="pt">
      <main className="container">
        <section className="hero">
          <h1>Fale Conosco</h1>
          <p>Tem uma pergunta ou precisa de ajuda? Envie uma mensagem.</p>
        </section>

        <div className="card" style={{ maxWidth: "600px", margin: "auto" }}>
          <form action="https://formspree.io/f/xqenplzg" method="POST">
            <label>Nome</label>
            <input type="text" name="name" required className="input" placeholder="Seu nome" />

            <label>Email</label>
            <input type="email" name="email" required className="input" placeholder="seu@email.com" />

            <label>Mensagem</label>
            <textarea name="message" required rows="6" className="input" placeholder="Escreva sua mensagem aqui"></textarea>

            <button className="btn" style={{ width: "100%" }} type="submit">
              Enviar mensagem
            </button>
          </form>
        </div>
      </main>
    </SiteShell>
  );
}
