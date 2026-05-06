import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createPageMetadata("ko", "png-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="ko">
      <ImageToPdfTool type="PNG" title="PNG를 PDF로" language="ko" />
    </SiteShell>
  );
}
