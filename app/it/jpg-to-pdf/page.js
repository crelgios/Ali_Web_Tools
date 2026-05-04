import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "JPG in PDF",
  description: "JPG in PDF online.",
  alternates: {
    canonical: "/it/jpg-to-pdf",
    languages: getHreflang("jpg-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="it">
      <ImageToPdfTool type="JPEG" title="JPG in PDF" language="it" />
    </SiteShell>
  );
}
