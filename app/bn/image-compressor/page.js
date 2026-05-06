import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createMetadata("bn", "image-compressor");
export default function Page(){ return <SiteShell lang="bn"><CompressImageTool lang="bn" /></SiteShell>; }
