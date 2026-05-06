import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import JpgToPngTool from "../../../components/JpgToPngTool";

export const metadata = createMetadata("th", "jpg-to-png");
export default function Page(){ return <SiteShell lang="th"><JpgToPngTool lang="th" /></SiteShell>; }
