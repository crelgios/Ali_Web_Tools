import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import ImageEditorTool from "../../../components/ImageEditorTool";

export const metadata = createMetadata("ko", "add-text-to-image");
export default function Page(){ return <SiteShell lang="ko"><ImageEditorTool lang="ko" /></SiteShell>; }
