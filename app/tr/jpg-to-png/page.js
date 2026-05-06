import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import JpgToPngTool from "../../../components/JpgToPngTool";

export const metadata = createMetadata("tr", "jpg-to-png");
export default function Page(){ return <SiteShell lang="tr"><JpgToPngTool lang="tr" /></SiteShell>; }
