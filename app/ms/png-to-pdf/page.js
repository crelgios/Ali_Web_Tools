import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "PNG ke PDF",
  description: "PNG ke PDF online.",
  alternates: {
    canonical: "/ms/png-to-pdf",
    languages: getHreflang("png-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="ms">
      <ImageToPdfTool type="PNG" title="PNG ke PDF" language="ms" />
    </SiteShell>
  );
}
