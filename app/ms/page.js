import { createPageMetadata } from "../../lib/seo";
import HomePage from "../../components/HomePage";
export const metadata = createPageMetadata("ms", "home");
export default function Page(){ return <HomePage lang="ms" />; }
