import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "JPG en PDF",
  description: "JPG en PDF online.",
  alternates: {
    canonical: "/fr/jpg-to-pdf",
    languages: getHreflang("jpg-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="fr">
      <ImageToPdfTool type="JPEG" title="JPG en PDF" language="fr" />
    </SiteShell>
  );
}
