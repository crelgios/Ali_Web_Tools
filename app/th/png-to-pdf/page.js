import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "PNG เป็น PDF",
  description: "PNG เป็น PDF online.",
  alternates: {
    canonical: "/th/png-to-pdf",
    languages: getHreflang("png-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="th">
      <ImageToPdfTool type="PNG" title="PNG เป็น PDF" language="th" />
    </SiteShell>
  );
}
