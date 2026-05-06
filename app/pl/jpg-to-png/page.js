import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import JpgToPngTool from "../../../components/JpgToPngTool";

export const metadata = createMetadata("pl", "jpg-to-png");
export default function Page(){ return <SiteShell lang="pl"><JpgToPngTool lang="pl" /></SiteShell>; }
