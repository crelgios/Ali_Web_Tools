import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "JPG เป็น PDF",
  description: "JPG เป็น PDF online.",
  alternates: {
    canonical: "/th/jpg-to-pdf",
    languages: getHreflang("jpg-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="th">
      <ImageToPdfTool type="JPEG" title="JPG เป็น PDF" language="th" />
    </SiteShell>
  );
}
