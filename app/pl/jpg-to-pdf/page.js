import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createMetadata("pl", "jpg-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="pl">
      <ImageToPdfTool type="JPEG" title="JPG do PDF" language="pl" />
    </SiteShell>
  );
}
