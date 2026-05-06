import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createPageMetadata("th", "image-compressor");
export default function Page(){ return <SiteShell lang="th"><CompressImageTool lang="th" /></SiteShell>; }
