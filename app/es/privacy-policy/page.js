import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = createPageMetadata("es", "privacy-policy");

export default function Page() {
  return (
    <SiteShell lang="es">
      <main className="container">
        <section className="hero">
          <h1>Política de Privacidad</h1>
          <p>Tu privacidad es importante. Los archivos se procesan en tu navegador cuando es posible y no guardamos tus archivos.</p>
        </section>
        <article className="card blog-post">
          <p>Creamos PDF Tools para ser simple, útil y respetuoso con la privacidad.</p>
<p>En las herramientas basadas en navegador, tus archivos se procesan en tu dispositivo siempre que sea posible.</p>
<p>No almacenamos permanentemente tus archivos subidos.</p>
<p>Podemos usar analítica básica o publicidad en el futuro para mejorar y mantener el sitio.</p>
        </article>
      </main>
    </SiteShell>
  );
}
