import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = createMetadata("es", "merge-pdf");

export default function Page() {
  return (
    <SiteShell lang="es">
      <MergePdfTool language="es" />
    </SiteShell>
  );
}
