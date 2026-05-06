import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createMetadata("es", "jpg-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="es">
      <ImageToPdfTool type="JPEG" title="JPG a PDF" language="es" />
    </SiteShell>
  );
}
