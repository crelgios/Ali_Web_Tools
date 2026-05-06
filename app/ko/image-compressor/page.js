import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createPageMetadata("ko", "image-compressor");
export default function Page(){ return <SiteShell lang="ko"><CompressImageTool lang="ko" /></SiteShell>; }
