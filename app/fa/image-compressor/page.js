import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createMetadata("fa", "image-compressor");
export default function Page(){ return <SiteShell lang="fa"><CompressImageTool lang="fa" /></SiteShell>; }
