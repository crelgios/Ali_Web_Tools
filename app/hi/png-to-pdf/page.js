import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "PNG से PDF",
  description: "PNG इमेज को ऑनलाइन PDF फाइल में बदलें।",
  alternates: {
    canonical: "/hi/png-to-pdf",
    languages: getHreflang("png-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="hi">
      <ImageToPdfTool type="PNG" title="PNG से PDF" language="hi" />
    </SiteShell>
  );
}
