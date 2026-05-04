import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "PNG سے PDF",
  description: "PNG سے PDF online.",
  alternates: {
    canonical: "/ur/png-to-pdf",
    languages: getHreflang("png-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="ur">
      <ImageToPdfTool type="PNG" title="PNG سے PDF" language="ur" />
    </SiteShell>
  );
}
