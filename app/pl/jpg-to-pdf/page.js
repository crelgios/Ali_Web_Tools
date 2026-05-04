import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "JPG do PDF",
  description: "JPG do PDF online.",
  alternates: {
    canonical: "/pl/jpg-to-pdf",
    languages: getHreflang("jpg-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="pl">
      <ImageToPdfTool type="JPEG" title="JPG do PDF" language="pl" />
    </SiteShell>
  );
}
