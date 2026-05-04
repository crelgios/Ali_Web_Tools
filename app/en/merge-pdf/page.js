import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "Merge PDF",
  description: "Combine multiple PDF files into one PDF.",
  alternates: {
    canonical: "/en/merge-pdf",
    languages: getHreflang("merge-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="en">
      <MergePdfTool language="en" />
    </SiteShell>
  );
}
