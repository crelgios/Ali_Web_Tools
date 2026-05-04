import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "JPG PDF’ye",
  description: "JPG PDF’ye online.",
  alternates: {
    canonical: "/tr/jpg-to-pdf",
    languages: getHreflang("jpg-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="tr">
      <ImageToPdfTool type="JPEG" title="JPG PDF’ye" language="tr" />
    </SiteShell>
  );
}
