import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createMetadata("pl", "png-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="pl">
      <ImageToPdfTool type="PNG" title="PNG do PDF" language="pl" />
    </SiteShell>
  );
}
