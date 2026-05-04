import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "PNG به PDF",
  description: "PNG به PDF online.",
  alternates: {
    canonical: "/fa/png-to-pdf",
    languages: getHreflang("png-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="fa">
      <ImageToPdfTool type="PNG" title="PNG به PDF" language="fa" />
    </SiteShell>
  );
}
