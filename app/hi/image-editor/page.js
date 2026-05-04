import SiteShell from "../../../components/SiteShell";
import ImageEditorTool from "../../../components/ImageEditorTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "इमेज एडिटर - Free Online Tool",
  description: "इमेज को क्रॉप, रीसाइज़, रोटेट, फ्लिप और कन्वर्ट करें। Your files stay private in your browser.",
  alternates: {
    canonical: "/hi/image-editor",
    languages: getHreflang("image-editor")
  }
};

export default function Page() {
  return (
    <SiteShell lang="hi">
      <ImageEditorTool lang="hi" />
    </SiteShell>
  );
}
