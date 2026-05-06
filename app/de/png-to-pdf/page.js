import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createPageMetadata("de", "png-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="de">
      <ImageToPdfTool type="PNG" title="PNG zu PDF" language="de" />
    </SiteShell>
  );
}
