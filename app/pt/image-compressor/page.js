import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createPageMetadata("pt", "image-compressor");
export default function Page(){ return <SiteShell lang="pt"><CompressImageTool lang="pt" /></SiteShell>; }
