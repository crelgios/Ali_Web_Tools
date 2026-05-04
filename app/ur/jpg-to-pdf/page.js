import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "JPG سے PDF",
  description: "JPG سے PDF online.",
  alternates: {
    canonical: "/ur/jpg-to-pdf",
    languages: getHreflang("jpg-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="ur">
      <ImageToPdfTool type="JPEG" title="JPG سے PDF" language="ur" />
    </SiteShell>
  );
}
