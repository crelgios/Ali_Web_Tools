import { createMetadata } from "../../lib/seoConfig";
import HomePage from "../../components/HomePage";
export const metadata = createMetadata("pl", "");
export default function Page(){ return <HomePage lang="pl" />; }
