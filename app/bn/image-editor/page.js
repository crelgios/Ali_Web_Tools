import SiteShell from "../../../components/SiteShell";
import ImageEditorTool from "../../../components/ImageEditorTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "ইমেজ এডিটর - Free Online Tool",
  description: "অনলাইনে ছবি ক্রপ, রিসাইজ, রোটেট, ফ্লিপ এবং কনভার্ট করুন। Your files stay private in your browser.",
  alternates: {
    canonical: "/bn/image-editor",
    languages: getHreflang("image-editor")
  }
};

export default function Page() {
  return (
    <SiteShell lang="bn">
      <ImageEditorTool lang="bn" />
    </SiteShell>
  );
}
