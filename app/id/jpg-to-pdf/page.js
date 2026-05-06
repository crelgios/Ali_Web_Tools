import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createPageMetadata("id", "jpg-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="id">
      <ImageToPdfTool type="JPEG" title="JPG ke PDF" language="id" />
    </SiteShell>
  );
}
