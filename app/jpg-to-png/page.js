import { createPageMetadata } from "../../lib/seo";
import SiteShell from "../../components/SiteShell";
import JpgToPngTool from "../../components/JpgToPngTool";

export const metadata = createPageMetadata("en", "jpg-to-png");
export default function Page(){ return <SiteShell lang="en"><JpgToPngTool lang="en" /></SiteShell>; }
