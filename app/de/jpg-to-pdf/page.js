import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "JPG zu PDF",
  description: "JPG zu PDF online.",
  alternates: {
    canonical: "/de/jpg-to-pdf",
    languages: getHreflang("jpg-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="de">
      <ImageToPdfTool type="JPEG" title="JPG zu PDF" language="de" />
    </SiteShell>
  );
}
