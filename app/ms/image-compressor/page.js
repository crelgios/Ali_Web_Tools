import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createPageMetadata("ms", "image-compressor");
export default function Page(){ return <SiteShell lang="ms"><CompressImageTool lang="ms" /></SiteShell>; }
