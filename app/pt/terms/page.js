import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";

export const metadata = createMetadata("pt", "terms");

export default function Page() {
  return (
    <SiteShell lang="pt">
      <main className="container">
        <section className="hero">
          <h1>Termos de Serviço</h1>
          <p>Ao usar o PDF Tools, você concorda em usar o site com responsabilidade.</p>
        </section>
        <article className="card blog-post">
          <p>O PDF Tools oferece ferramentas online gratuitas para converter e juntar arquivos.</p>
<p>Você é responsável pelos arquivos que escolhe processar.</p>
<p>Não garantimos que todos os arquivos serão convertidos perfeitamente.</p>
<p>Não use este site para atividades ilegais, prejudiciais ou abusivas.</p>
        </article>
      </main>
    </SiteShell>
  );
}
