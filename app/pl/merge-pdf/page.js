import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "Połącz PDF",
  description: "Połącz PDF",
  alternates: {
    canonical: "/pl/merge-pdf",
    languages: getHreflang("merge-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="pl">
      <MergePdfTool language="pl" />
    </SiteShell>
  );
}
