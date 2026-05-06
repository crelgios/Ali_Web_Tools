import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createPageMetadata("zh-CN", "image-compressor");
export default function Page(){ return <SiteShell lang="zh-CN"><CompressImageTool lang="zh-CN" /></SiteShell>; }
