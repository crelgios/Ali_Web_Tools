import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createPageMetadata("vi", "png-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="vi">
      <ImageToPdfTool type="PNG" title="PNG sang PDF" language="vi" />
    </SiteShell>
  );
}
