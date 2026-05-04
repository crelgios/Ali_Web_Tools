import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = {
  title: "Convertir JPG a PDF Gratis Online",
  description: "Convierte imágenes JPG a PDF online gratis.",
  alternates: {
    languages: {
      en: "/en/jpg-to-pdf",
      hi: "/hi/jpg-to-pdf",
      es: "/es/jpg-to-pdf"
    }
  }
};

export default function Page() {
  return (
    <SiteShell lang="es">
      <ImageToPdfTool type="JPEG" title="Convertir JPG a PDF" language="es" />
    </SiteShell>
  );
}
