import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createPageMetadata("tr", "image-compressor");
export default function Page(){ return <SiteShell lang="tr"><CompressImageTool lang="tr" /></SiteShell>; }
