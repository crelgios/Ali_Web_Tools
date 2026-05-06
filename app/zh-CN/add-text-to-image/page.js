import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import ImageEditorTool from "../../../components/ImageEditorTool";

export const metadata = createMetadata("zh-CN", "add-text-to-image");
export default function Page(){ return <SiteShell lang="zh-CN"><ImageEditorTool lang="zh-CN" /></SiteShell>; }
