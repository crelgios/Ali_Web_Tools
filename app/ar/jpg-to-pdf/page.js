import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createMetadata("ar", "jpg-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="ar">
      <ImageToPdfTool type="JPEG" title="JPG إلى PDF" language="ar" />
    </SiteShell>
  );
}
