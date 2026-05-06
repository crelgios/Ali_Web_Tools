import { createMetadata } from "../../../lib/seoConfig";
import SiteShell from "../../../components/SiteShell";
import ImageEditorTool from "../../../components/ImageEditorTool";

export const metadata = createMetadata("tr", "add-text-to-image");
export default function Page(){ return <SiteShell lang="tr"><ImageEditorTool lang="tr" /></SiteShell>; }
