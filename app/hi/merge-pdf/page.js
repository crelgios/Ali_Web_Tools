import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "PDF मिलाएं",
  description: "कई PDF फाइलों को एक PDF में मिलाएं।",
  alternates: {
    canonical: "/hi/merge-pdf",
    languages: getHreflang("merge-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="hi">
      <MergePdfTool language="hi" />
    </SiteShell>
  );
}
