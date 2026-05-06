import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createPageMetadata("ja", "image-compressor");
export default function Page(){ return <SiteShell lang="ja"><CompressImageTool lang="ja" /></SiteShell>; }
