import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "PNGからPDF",
  description: "PNGからPDF online.",
  alternates: {
    canonical: "/ja/png-to-pdf",
    languages: getHreflang("png-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="ja">
      <ImageToPdfTool type="PNG" title="PNGからPDF" language="ja" />
    </SiteShell>
  );
}
