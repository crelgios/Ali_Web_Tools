import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createMetadata("ur", "png-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="ur">
      <ImageToPdfTool type="PNG" title="PNG سے PDF" language="ur" />
    </SiteShell>
  );
}
