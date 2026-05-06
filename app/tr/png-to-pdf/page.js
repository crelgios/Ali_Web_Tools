import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createMetadata("tr", "png-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="tr">
      <ImageToPdfTool type="PNG" title="PNG PDF’ye" language="tr" />
    </SiteShell>
  );
}
