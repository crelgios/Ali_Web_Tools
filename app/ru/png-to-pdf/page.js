import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = createMetadata("ru", "png-to-pdf");

export default function Page() {
  return (
    <SiteShell lang="ru">
      <ImageToPdfTool type="PNG" title="PNG в PDF" language="ru" />
    </SiteShell>
  );
}
