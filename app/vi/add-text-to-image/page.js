import SiteShell from "../../../components/SiteShell";
import ImageEditorTool from "../../../components/ImageEditorTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = { title: "Add Text to Image", description: "Add text to photos online without uploading files.", alternates: { canonical: "/vi/add-text-to-image", languages: getHreflang("add-text-to-image") } };
export default function Page(){ return <SiteShell lang="vi"><ImageEditorTool lang="vi" /></SiteShell>; }
