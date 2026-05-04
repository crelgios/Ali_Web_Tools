import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "PNG a PDF",
  description: "Convierte imágenes PNG en archivos PDF online.",
  alternates: {
    canonical: "/es/png-to-pdf",
    languages: getHreflang("png-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="es">
      <ImageToPdfTool type="PNG" title="PNG a PDF" language="es" />
    </SiteShell>
  );
}
