import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = {
  title: "Unir PDF Gratis Online",
  description: "Une varios archivos PDF en un solo PDF online gratis.",
  alternates: {
    languages: {
      en: "/en/merge-pdf",
      hi: "/hi/merge-pdf",
      es: "/es/merge-pdf"
    }
  }
};

export default function Page() {
  return (
    <SiteShell lang="es">
      <MergePdfTool language="es" />
    </SiteShell>
  );
}
