import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "Preguntas Frecuentes | PDF Tools",
  description: "Respuestas a preguntas comunes sobre PDF Tools.",
  alternates: {
    canonical: "/es/faq",
    languages: getTrustHreflang("faq")
  }
};

export default function Page() {
  return (
    <SiteShell lang="es">
      <main className="container">
        <section className="hero">
          <h1>Preguntas Frecuentes</h1>
          <p>Respuestas a preguntas comunes sobre PDF Tools.</p>
        </section>
        <section className="faq-list">
          <div className="card faq-card"><h2>¿Se guardan mis archivos?</h2><p>No. Los archivos se procesan en tu navegador cuando es posible y no los guardamos.</p></div>
<div className="card faq-card"><h2>¿La herramienta es gratis?</h2><p>Sí, las herramientas básicas de PDF son gratis.</p></div>
<div className="card faq-card"><h2>¿Funciona en móvil?</h2><p>Sí, funciona en navegadores móviles, tablets y escritorio.</p></div>
<div className="card faq-card"><h2>¿Necesito una cuenta?</h2><p>No se requiere registro.</p></div>
        </section>
      </main>
    </SiteShell>
  );
}
