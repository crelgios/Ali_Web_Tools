import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createMetadata("it", "png-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="it">
      <ImageToPdfTool type="PNG" title="PNG in PDF" language="it" />
    </SiteShell>
  );
}
