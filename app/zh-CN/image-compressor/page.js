import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createMetadata("zh-CN", "image-compressor");
export default function Page(){ return <SiteShell lang="zh-CN"><CompressImageTool lang="zh-CN" /></SiteShell>; }
