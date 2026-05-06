import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createPageMetadata("nl", "jpg-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="nl">
      <ImageToPdfTool type="JPEG" title="JPG naar PDF" language="nl" />
    </SiteShell>
  );
}
