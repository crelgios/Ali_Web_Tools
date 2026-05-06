import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createPageMetadata("ru", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="ru">
      <MergePdfTool language="ru" />
    </SiteShell>
  );
}
