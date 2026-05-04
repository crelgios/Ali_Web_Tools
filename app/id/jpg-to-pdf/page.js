import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "JPG ke PDF",
  description: "JPG ke PDF online.",
  alternates: {
    canonical: "/id/jpg-to-pdf",
    languages: getHreflang("jpg-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="id">
      <ImageToPdfTool type="JPEG" title="JPG ke PDF" language="id" />
    </SiteShell>
  );
}
