import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createPageMetadata("bn", "image-compressor");
export default function Page(){ return <SiteShell lang="bn"><CompressImageTool lang="bn" /></SiteShell>; }
