import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "Unir PDF",
  description: "Combina varios archivos PDF en un solo PDF.",
  alternates: {
    canonical: "/es/merge-pdf",
    languages: getHreflang("merge-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="es">
      <MergePdfTool language="es" />
    </SiteShell>
  );
}
