import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createMetadata("bn", "jpg-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="bn">
      <ImageToPdfTool type="JPEG" title="JPG থেকে PDF" language="bn" />
    </SiteShell>
  );
}
