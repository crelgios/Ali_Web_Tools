import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createPageMetadata("fr", "png-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="fr">
      <ImageToPdfTool type="PNG" title="PNG en PDF" language="fr" />
    </SiteShell>
  );
}
