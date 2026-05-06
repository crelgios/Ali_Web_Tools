import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createMetadata("id", "image-compressor");
export default function Page(){ return <SiteShell lang="id"><CompressImageTool lang="id" /></SiteShell>; }
