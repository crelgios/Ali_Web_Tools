import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "PNG para PDF",
  description: "Converta imagens PNG em PDF online.",
  alternates: {
    canonical: "/pt/png-to-pdf",
    languages: getHreflang("png-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="pt">
      <ImageToPdfTool type="PNG" title="PNG para PDF" language="pt" />
    </SiteShell>
  );
}
