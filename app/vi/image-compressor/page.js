import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createMetadata("vi", "image-compressor");
export default function Page(){ return <SiteShell lang="vi"><CompressImageTool lang="vi" /></SiteShell>; }
