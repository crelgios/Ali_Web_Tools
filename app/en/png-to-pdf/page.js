import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createPageMetadata("en", "png-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="en">
      <ImageToPdfTool type="PNG" title="PNG to PDF" language="en" />
    </SiteShell>
  );
}
