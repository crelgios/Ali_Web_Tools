import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createMetadata("pt", "image-compressor");
export default function Page(){ return <SiteShell lang="pt"><CompressImageTool lang="pt" /></SiteShell>; }
