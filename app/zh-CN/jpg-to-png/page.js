import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import JpgToPngTool from "../../../components/JpgToPngTool";

export const metadata = createMetadata("zh-CN", "jpg-to-png");
export default function Page(){ return <SiteShell lang="zh-CN"><JpgToPngTool lang="zh-CN" /></SiteShell>; }
