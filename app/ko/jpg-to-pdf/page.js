import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createPageMetadata("ko", "jpg-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="ko">
      <ImageToPdfTool type="JPEG" title="JPG를 PDF로" language="ko" />
    </SiteShell>
  );
}
