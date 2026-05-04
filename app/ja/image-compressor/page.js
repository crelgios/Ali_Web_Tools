import SiteShell from "../../../components/SiteShell";
import ImageEditorTool from "../../../components/ImageEditorTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = { title: "Image Compressor", description: "Compress images online privately in your browser.", alternates: { canonical: "/ja/image-compressor", languages: getHreflang("image-compressor") } };
export default function Page(){ return <SiteShell lang="ja"><ImageEditorTool lang="ja" /></SiteShell>; }
