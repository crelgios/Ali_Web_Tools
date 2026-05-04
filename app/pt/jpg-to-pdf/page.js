import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "JPG para PDF",
  description: "Converta imagens JPG em PDF instantaneamente.",
  alternates: {
    canonical: "/pt/jpg-to-pdf",
    languages: getHreflang("jpg-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="pt">
      <ImageToPdfTool type="JPEG" title="JPG para PDF" language="pt" />
    </SiteShell>
  );
}
