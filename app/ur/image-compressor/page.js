import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createPageMetadata("ur", "image-compressor");
export default function Page(){ return <SiteShell lang="ur"><CompressImageTool lang="ur" /></SiteShell>; }
