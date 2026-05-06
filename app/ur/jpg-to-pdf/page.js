import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createMetadata("ur", "jpg-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="ur">
      <ImageToPdfTool type="JPEG" title="JPG سے PDF" language="ur" />
    </SiteShell>
  );
}
