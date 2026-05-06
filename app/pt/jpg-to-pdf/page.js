import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createMetadata("pt", "jpg-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="pt">
      <ImageToPdfTool type="JPEG" title="JPG para PDF" language="pt" />
    </SiteShell>
  );
}
