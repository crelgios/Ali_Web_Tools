import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createPageMetadata("it", "png-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="it">
      <ImageToPdfTool type="PNG" title="PNG in PDF" language="it" />
    </SiteShell>
  );
}
