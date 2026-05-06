import { createMetadata } from "../../lib/seoConfig";
import SiteShell from "../../components/SiteShell";
import { getHreflang } from "../../lib/translations";
import CompressImageTool from "../../components/CompressImageTool";

export const metadata = createMetadata("en", "image-compressor");
export default function Page(){ return <SiteShell lang="en"><CompressImageTool lang="en" /></SiteShell>; }
