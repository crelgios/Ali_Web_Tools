import { createPageMetadata } from "../../lib/seo";
import HomePage from "../../components/HomePage";
export const metadata = createPageMetadata("th", "home");
export default function Page(){ return <HomePage lang="th" />; }
