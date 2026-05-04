import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "JPG a PDF",
  description: "Convierte imágenes JPG en archivos PDF al instante.",
  alternates: {
    canonical: "/es/jpg-to-pdf",
    languages: getHreflang("jpg-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="es">
      <ImageToPdfTool type="JPEG" title="JPG a PDF" language="es" />
    </SiteShell>
  );
}
