import SiteShell from "../../../components/SiteShell";
import ImageEditorTool from "../../../components/ImageEditorTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = { title: "Resize Image Online", description: "Resize images by exact width and height online in your browser.", alternates: { canonical: "/tr/resize-image", languages: getHreflang("resize-image") } };
export default function Page(){ return <SiteShell lang="tr"><ImageEditorTool lang="tr" /></SiteShell>; }
