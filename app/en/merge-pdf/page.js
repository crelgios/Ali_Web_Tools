import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";

export const metadata = {
  title: "Merge PDF Free Online",
  description: "Merge multiple PDF files into one PDF online for free.",
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
    <SiteShell lang="en">
      <MergePdfTool language="en" />
    </SiteShell>
  );
}
