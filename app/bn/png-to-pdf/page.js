import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createPageMetadata("bn", "png-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="bn">
      <ImageToPdfTool type="PNG" title="PNG থেকে PDF" language="bn" />
    </SiteShell>
  );
}
