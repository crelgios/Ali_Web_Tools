import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "PNG zu PDF",
  description: "PNG zu PDF online.",
  alternates: {
    canonical: "/de/png-to-pdf",
    languages: getHreflang("png-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="de">
      <ImageToPdfTool type="PNG" title="PNG zu PDF" language="de" />
    </SiteShell>
  );
}
