import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createMetadata("ko", "image-compressor");
export default function Page(){ return <SiteShell lang="ko"><CompressImageTool lang="ko" /></SiteShell>; }
