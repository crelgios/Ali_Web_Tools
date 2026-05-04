import SiteShell from "../../../components/SiteShell";
import ImageToPdfTool from "../../../components/ImageToPdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "JPG в PDF",
  description: "JPG в PDF online.",
  alternates: {
    canonical: "/ru/jpg-to-pdf",
    languages: getHreflang("jpg-to-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="ru">
      <ImageToPdfTool type="JPEG" title="JPG в PDF" language="ru" />
    </SiteShell>
  );
}
