import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "JPG থেকে PDF",
  description: "JPG থেকে PDF online.",
  alternates: {
    canonical: "/bn/jpg-to-pdf",
    languages: getHreflang("jpg-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="bn">
      <ImageToPdfTool type="JPEG" title="JPG থেকে PDF" language="bn" />
    </SiteShell>
  );
}
