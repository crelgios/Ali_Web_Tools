import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createPageMetadata("pt", "png-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="pt">
      <ImageToPdfTool type="PNG" title="PNG para PDF" language="pt" />
    </SiteShell>
  );
}
