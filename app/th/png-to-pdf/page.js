import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createPageMetadata("th", "png-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="th">
      <ImageToPdfTool type="PNG" title="PNG เป็น PDF" language="th" />
    </SiteShell>
  );
}
