import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createMetadata("de", "jpg-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="de">
      <ImageToPdfTool type="JPEG" title="JPG zu PDF" language="de" />
    </SiteShell>
  );
}
