import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "Perguntas Frequentes | PDF Tools",
  description: "Respostas para perguntas comuns sobre o PDF Tools.",
  alternates: {
    canonical: "/pt/faq",
    languages: getTrustHreflang("faq")
  }
};

export default function Page() {
  return (
    <SiteShell lang="pt">
      <main className="container">
        <section className="hero">
          <h1>Perguntas Frequentes</h1>
          <p>Respostas para perguntas comuns sobre o PDF Tools.</p>
        </section>
        <section className="faq-list">
          <div className="card faq-card"><h2>Meus arquivos são armazenados?</h2><p>Não. Os arquivos são processados no navegador sempre que possível e não são armazenados por nós.</p></div>
<div className="card faq-card"><h2>A ferramenta é gratuita?</h2><p>Sim, as ferramentas básicas de PDF são gratuitas.</p></div>
<div className="card faq-card"><h2>Funciona no celular?</h2><p>Sim, funciona em navegadores de celular, tablet e computador.</p></div>
<div className="card faq-card"><h2>Preciso criar uma conta?</h2><p>Não é necessário cadastro.</p></div>
        </section>
      </main>
    </SiteShell>
  );
}
