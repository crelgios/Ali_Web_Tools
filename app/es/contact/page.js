import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = createPageMetadata("es", "contact");

export default function Page() {
  return (
    <SiteShell lang="es">
      <main className="container">
        <section className="hero">
          <h1>Contáctanos</h1>
          <p>¿Tienes una pregunta o necesitas ayuda? Envíanos un mensaje.</p>
        </section>

        <div className="card" style={{ maxWidth: "600px", margin: "auto" }}>
          <form action="https://formspree.io/f/xqenplzg" method="POST">
            <label>Nombre</label>
            <input type="text" name="name" required className="input" placeholder="Tu nombre" />

            <label>Correo electrónico</label>
            <input type="email" name="email" required className="input" placeholder="tu@email.com" />

            <label>Mensaje</label>
            <textarea name="message" required rows="6" className="input" placeholder="Escribe tu mensaje aquí"></textarea>

            <button className="btn" style={{ width: "100%" }} type="submit">
              Enviar mensaje
            </button>
          </form>
        </div>
      </main>
    </SiteShell>
  );
}
