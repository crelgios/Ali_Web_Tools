import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createPageMetadata("hi", "jpg-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="hi">
      <ImageToPdfTool type="JPEG" title="JPG से PDF" language="hi" />
    </SiteShell>
  );
}
