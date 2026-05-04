import SiteShell from "../../../components/SiteShell";
import { getHreflang } from "../../../lib/translations";
import CompressImageTool from "../../../components/CompressImageTool";

export const metadata = { title: "Image Compressor Online", description: "Compress images privately in your browser.", alternates: { canonical: "/nl/image-compressor", languages: getHreflang("image-compressor") } };
export default function Page(){ return <SiteShell lang="nl"><CompressImageTool lang="nl" /></SiteShell>; }
