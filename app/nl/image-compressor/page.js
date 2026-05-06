import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createMetadata("nl", "image-compressor");
export default function Page(){ return <SiteShell lang="nl"><CompressImageTool lang="nl" /></SiteShell>; }
