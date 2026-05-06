import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createPageMetadata("de", "image-compressor");
export default function Page(){ return <SiteShell lang="de"><CompressImageTool lang="de" /></SiteShell>; }
