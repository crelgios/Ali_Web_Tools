import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createPageMetadata("it", "jpg-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="it">
      <ImageToPdfTool type="JPEG" title="JPG in PDF" language="it" />
    </SiteShell>
  );
}
