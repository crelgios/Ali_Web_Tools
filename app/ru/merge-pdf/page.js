import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "Объединить PDF",
  description: "Объединить PDF",
  alternates: {
    canonical: "/ru/merge-pdf",
    languages: getHreflang("merge-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="ru">
      <MergePdfTool language="ru" />
    </SiteShell>
  );
}
