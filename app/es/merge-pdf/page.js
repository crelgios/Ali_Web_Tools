import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createPageMetadata("es", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="es">
      <MergePdfTool language="es" />
    </SiteShell>
  );
}
