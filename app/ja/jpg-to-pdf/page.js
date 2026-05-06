import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createPageMetadata("ja", "jpg-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="ja">
      <ImageToPdfTool type="JPEG" title="JPGからPDF" language="ja" />
    </SiteShell>
  );
}
