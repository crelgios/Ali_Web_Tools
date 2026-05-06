import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createPageMetadata("es", "jpg-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="es">
      <ImageToPdfTool type="JPEG" title="JPG a PDF" language="es" />
    </SiteShell>
  );
}
