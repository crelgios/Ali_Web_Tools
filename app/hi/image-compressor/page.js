import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createMetadata("hi", "image-compressor");
export default function Page(){ return <SiteShell lang="hi"><CompressImageTool lang="hi" /></SiteShell>; }
