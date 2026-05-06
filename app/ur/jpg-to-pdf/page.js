import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createPageMetadata("ur", "jpg-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="ur">
      <ImageToPdfTool type="JPEG" title="JPG سے PDF" language="ur" />
    </SiteShell>
  );
}
