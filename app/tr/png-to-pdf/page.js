import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "PNG PDF’ye",
  description: "PNG PDF’ye online.",
  alternates: {
    canonical: "/tr/png-to-pdf",
    languages: getHreflang("png-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="tr">
      <ImageToPdfTool type="PNG" title="PNG PDF’ye" language="tr" />
    </SiteShell>
  );
}
