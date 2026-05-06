import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createMetadata("es", "png-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="es">
      <ImageToPdfTool type="PNG" title="PNG a PDF" language="es" />
    </SiteShell>
  );
}
