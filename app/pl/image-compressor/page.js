import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createPageMetadata("pl", "image-compressor");
export default function Page(){ return <SiteShell lang="pl"><CompressImageTool lang="pl" /></SiteShell>; }
