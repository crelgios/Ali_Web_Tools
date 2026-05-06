import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createPageMetadata("pl", "png-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="pl">
      <ImageToPdfTool type="PNG" title="PNG do PDF" language="pl" />
    </SiteShell>
  );
}
