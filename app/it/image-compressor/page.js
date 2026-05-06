import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createPageMetadata("it", "image-compressor");
export default function Page(){ return <SiteShell lang="it"><CompressImageTool lang="it" /></SiteShell>; }
