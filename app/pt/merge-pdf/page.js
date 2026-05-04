import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "Juntar PDF",
  description: "Combine vários PDFs em um só arquivo.",
  alternates: {
    canonical: "/pt/merge-pdf",
    languages: getHreflang("merge-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="pt">
      <MergePdfTool language="pt" />
    </SiteShell>
  );
}
