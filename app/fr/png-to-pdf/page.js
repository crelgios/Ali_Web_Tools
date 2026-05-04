import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "PNG en PDF",
  description: "PNG en PDF online.",
  alternates: {
    canonical: "/fr/png-to-pdf",
    languages: getHreflang("png-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="fr">
      <ImageToPdfTool type="PNG" title="PNG en PDF" language="fr" />
    </SiteShell>
  );
}
