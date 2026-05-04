import SiteShell from "../../components/SiteShell";
import ImageEditorTool from "../../components/ImageEditorTool";

export const metadata = { title: "Free Online Image Editor", description: "Crop, resize, rotate, flip and convert images online. Your files stay private in your browser." };

export default function Page() {
  return <SiteShell lang="en"><ImageEditorTool lang="en" /></SiteShell>;
}
