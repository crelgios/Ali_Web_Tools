import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "Términos de Servicio | PDF Tools",
  description: "Al usar PDF Tools, aceptas utilizar el sitio de forma responsable.",
  alternates: {
    canonical: "/es/terms",
    languages: getTrustHreflang("terms")
  }
};

export default function Page() {
  return (
    <SiteShell lang="es">
      <main className="container">
        <section className="hero">
          <h1>Términos de Servicio</h1>
          <p>Al usar PDF Tools, aceptas utilizar el sitio de forma responsable.</p>
        </section>
        <article className="card blog-post">
          <p>PDF Tools ofrece herramientas online gratuitas para convertir y unir archivos.</p>
<p>Tú eres responsable de los archivos que decides procesar.</p>
<p>No garantizamos que todos los archivos se conviertan perfectamente.</p>
<p>No uses este sitio para actividades ilegales, dañinas o abusivas.</p>
        </article>
      </main>
    </SiteShell>
  );
}
