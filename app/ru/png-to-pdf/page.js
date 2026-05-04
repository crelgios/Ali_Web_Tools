import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "PNG в PDF",
  description: "PNG в PDF online.",
  alternates: {
    canonical: "/ru/png-to-pdf",
    languages: getHreflang("png-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="ru">
      <ImageToPdfTool type="PNG" title="PNG в PDF" language="ru" />
    </SiteShell>
  );
}
