import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createMetadata("ko", "jpg-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="ko">
      <ImageToPdfTool type="JPEG" title="JPG를 PDF로" language="ko" />
    </SiteShell>
  );
}
