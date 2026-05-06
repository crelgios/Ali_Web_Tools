import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createMetadata("ja", "png-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="ja">
      <ImageToPdfTool type="PNG" title="PNGからPDF" language="ja" />
    </SiteShell>
  );
}
