import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "JPG به PDF",
  description: "JPG به PDF online.",
  alternates: {
    canonical: "/fa/jpg-to-pdf",
    languages: getHreflang("jpg-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="fa">
      <ImageToPdfTool type="JPEG" title="JPG به PDF" language="fa" />
    </SiteShell>
  );
}
