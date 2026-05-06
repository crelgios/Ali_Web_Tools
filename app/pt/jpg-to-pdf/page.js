import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createPageMetadata("pt", "jpg-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="pt">
      <ImageToPdfTool type="JPEG" title="JPG para PDF" language="pt" />
    </SiteShell>
  );
}
