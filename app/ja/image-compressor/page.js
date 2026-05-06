import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createMetadata("ja", "image-compressor");
export default function Page(){ return <SiteShell lang="ja"><CompressImageTool lang="ja" /></SiteShell>; }
