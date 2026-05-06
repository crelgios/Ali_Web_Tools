import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createPageMetadata("ar", "png-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="ar">
      <ImageToPdfTool type="PNG" title="PNG إلى PDF" language="ar" />
    </SiteShell>
  );
}
