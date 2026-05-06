import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createMetadata("tr", "jpg-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="tr">
      <ImageToPdfTool type="JPEG" title="JPG PDF’ye" language="tr" />
    </SiteShell>
  );
}
