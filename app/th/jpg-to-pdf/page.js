import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createPageMetadata("th", "jpg-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="th">
      <ImageToPdfTool type="JPEG" title="JPG เป็น PDF" language="th" />
    </SiteShell>
  );
}
