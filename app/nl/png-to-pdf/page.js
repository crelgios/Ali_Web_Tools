import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createPageMetadata("nl", "png-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="nl">
      <ImageToPdfTool type="PNG" title="PNG naar PDF" language="nl" />
    </SiteShell>
  );
}
