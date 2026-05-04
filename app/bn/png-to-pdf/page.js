import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "PNG থেকে PDF",
  description: "PNG থেকে PDF online.",
  alternates: {
    canonical: "/bn/png-to-pdf",
    languages: getHreflang("png-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="bn">
      <ImageToPdfTool type="PNG" title="PNG থেকে PDF" language="bn" />
    </SiteShell>
  );
}
