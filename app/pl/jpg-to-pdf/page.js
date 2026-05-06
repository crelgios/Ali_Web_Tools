import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createPageMetadata("pl", "jpg-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="pl">
      <ImageToPdfTool type="JPEG" title="JPG do PDF" language="pl" />
    </SiteShell>
  );
}
