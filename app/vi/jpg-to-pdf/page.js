import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createMetadata("vi", "jpg-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="vi">
      <ImageToPdfTool type="JPEG" title="JPG sang PDF" language="vi" />
    </SiteShell>
  );
}
