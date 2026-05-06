import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createPageMetadata("fa", "jpg-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="fa">
      <ImageToPdfTool type="JPEG" title="JPG به PDF" language="fa" />
    </SiteShell>
  );
}
