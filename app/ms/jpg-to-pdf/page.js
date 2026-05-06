import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createPageMetadata("ms", "jpg-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="ms">
      <ImageToPdfTool type="JPEG" title="JPG ke PDF" language="ms" />
    </SiteShell>
  );
}
