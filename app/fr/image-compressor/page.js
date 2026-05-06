import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = createMetadata("fr", "image-compressor");
export default function Page(){ return <SiteShell lang="fr"><CompressImageTool lang="fr" /></SiteShell>; }
