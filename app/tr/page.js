import { createPageMetadata } from "../../lib/seo";
import HomePage from "../../components/HomePage";
export const metadata = createPageMetadata("tr", "home");
export default function Page(){ return <HomePage lang="tr" />; }
