import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createPageMetadata("ru", "png-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="ru">
      <ImageToPdfTool type="PNG" title="PNG в PDF" language="ru" />
    </SiteShell>
  );
}
