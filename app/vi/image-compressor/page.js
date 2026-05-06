import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createPageMetadata("vi", "image-compressor");
export default function Page(){ return <SiteShell lang="vi"><CompressImageTool lang="vi" /></SiteShell>; }
