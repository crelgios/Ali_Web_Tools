import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createPageMetadata("nl", "image-compressor");
export default function Page(){ return <SiteShell lang="nl"><CompressImageTool lang="nl" /></SiteShell>; }
