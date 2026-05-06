import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createPageMetadata("ar", "image-compressor");
export default function Page(){ return <SiteShell lang="ar"><CompressImageTool lang="ar" /></SiteShell>; }
