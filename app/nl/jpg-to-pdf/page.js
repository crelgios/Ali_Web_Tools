import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "JPG naar PDF",
  description: "JPG naar PDF online.",
  alternates: {
    canonical: "/nl/jpg-to-pdf",
    languages: getHreflang("jpg-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="nl">
      <ImageToPdfTool type="JPEG" title="JPG naar PDF" language="nl" />
    </SiteShell>
  );
}
