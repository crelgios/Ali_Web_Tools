import { createPageMetadata } from "../../lib/seo";
import SiteShell from "../../components/SiteShell";
import CompressImageTool from "../../components/CompressImageTool";

export const metadata = createPageMetadata("en", "image-compressor");
export default function Page(){ return <SiteShell lang="en"><CompressImageTool lang="en" /></SiteShell>; }
