import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = createPageMetadata("pt", "privacy-policy");

export default function Page() {
  return (
    <SiteShell lang="pt">
      <main className="container">
        <section className="hero">
          <h1>Política de Privacidade</h1>
          <p>Sua privacidade é importante. Os arquivos são processados no navegador sempre que possível e não armazenamos seus arquivos.</p>
        </section>
        <article className="card blog-post">
          <p>Criamos o PDF Tools para ser simples, útil e amigável à privacidade.</p>
<p>Nas ferramentas baseadas no navegador, seus arquivos são processados no seu dispositivo sempre que possível.</p>
<p>Não armazenamos permanentemente seus arquivos enviados.</p>
<p>Podemos usar análises básicas ou anúncios no futuro para melhorar e manter o site.</p>
        </article>
      </main>
    </SiteShell>
  );
}
