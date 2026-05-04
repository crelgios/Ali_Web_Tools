import SiteShell from "../../../components/SiteShell";
import { getHreflang } from "../../../lib/translations";
import CropImageTool from "../../../components/CropImageTool";

export const metadata = { title: "Crop Image Online", description: "Crop images with rectangular selection privately in your browser.", alternates: { canonical: "/it/crop-image", languages: getHreflang("crop-image") } };
export default function Page(){ return <SiteShell lang="it"><CropImageTool lang="it" /></SiteShell>; }
