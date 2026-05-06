import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import JpgToPngTool from "../../../components/JpgToPngTool";

export const metadata = createPageMetadata("ja", "jpg-to-png");
export default function Page(){ return <SiteShell lang="ja"><JpgToPngTool lang="ja" /></SiteShell>; }
