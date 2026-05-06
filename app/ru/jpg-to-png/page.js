import { createPageMetadata } from "../../../lib/seo";
import SiteShell from "../../../components/SiteShell";
import JpgToPngTool from "../../../components/JpgToPngTool";

export const metadata = createPageMetadata("ru", "jpg-to-png");
export default function Page(){ return <SiteShell lang="ru"><JpgToPngTool lang="ru" /></SiteShell>; }
