import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createPageMetadata("fr", "jpg-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="fr">
      <ImageToPdfTool type="JPEG" title="JPG en PDF" language="fr" />
    </SiteShell>
  );
}
