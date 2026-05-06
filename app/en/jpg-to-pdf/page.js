import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createMetadata("en", "jpg-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="en">
      <ImageToPdfTool type="JPEG" title="JPG to PDF" language="en" />
    </SiteShell>
  );
}
