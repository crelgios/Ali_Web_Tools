import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "PNG do PDF",
  description: "PNG do PDF online.",
  alternates: {
    canonical: "/pl/png-to-pdf",
    languages: getHreflang("png-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="pl">
      <ImageToPdfTool type="PNG" title="PNG do PDF" language="pl" />
    </SiteShell>
  );
}
