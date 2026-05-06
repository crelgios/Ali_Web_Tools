import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createPageMetadata("fa", "png-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="fa">
      <ImageToPdfTool type="PNG" title="PNG به PDF" language="fa" />
    </SiteShell>
  );
}
