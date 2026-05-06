import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createMetadata("ms", "png-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="ms">
      <ImageToPdfTool type="PNG" title="PNG ke PDF" language="ms" />
    </SiteShell>
  );
}
