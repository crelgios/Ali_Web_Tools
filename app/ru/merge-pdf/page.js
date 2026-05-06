import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createMetadata("ru", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="ru">
      <MergePdfTool language="ru" />
    </SiteShell>
  );
}
