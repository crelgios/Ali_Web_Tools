import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import JpgToPngTool from "../../../components/JpgToPngTool";

export const metadata = createMetadata("fa", "jpg-to-png");
export default function Page(){ return <SiteShell lang="fa"><JpgToPngTool lang="fa" /></SiteShell>; }
