import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createPageMetadata("fa", "image-compressor");
export default function Page(){ return <SiteShell lang="fa"><CompressImageTool lang="fa" /></SiteShell>; }
