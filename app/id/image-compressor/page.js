import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createPageMetadata("id", "image-compressor");
export default function Page(){ return <SiteShell lang="id"><CompressImageTool lang="id" /></SiteShell>; }
