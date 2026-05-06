import { createPageMetadata } from "../../lib/seo";
import HomePage from "../../components/HomePage";
export const metadata = createPageMetadata("it", "home");
export default function Page(){ return <HomePage lang="it" />; }
