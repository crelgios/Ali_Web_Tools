import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "PNG in PDF",
  description: "PNG in PDF online.",
  alternates: {
    canonical: "/it/png-to-pdf",
    languages: getHreflang("png-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="it">
      <ImageToPdfTool type="PNG" title="PNG in PDF" language="it" />
    </SiteShell>
  );
}
