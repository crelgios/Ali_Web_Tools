import { createPageMetadata } from "../../../lib/seo";
import BlogIndex from "../../../components/BlogIndex";

export const metadata = createPageMetadata("ms", "blog");

export default function Page() {
  return <BlogIndex lang="ms" />;
}
