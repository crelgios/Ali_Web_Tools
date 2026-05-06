import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createPageMetadata("ur", "png-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="ur">
      <ImageToPdfTool type="PNG" title="PNG سے PDF" language="ur" />
    </SiteShell>
  );
}
