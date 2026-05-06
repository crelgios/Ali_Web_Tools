import { createMetadata } from "../../../lib/seoConfig";
import BlogIndex from "../../../components/BlogIndex";

export const metadata = createMetadata("pt", "blog");

export default function Page() {
  return <BlogIndex lang="pt" />;
}
