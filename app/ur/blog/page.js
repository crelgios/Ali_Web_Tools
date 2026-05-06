import { createMetadata } from "../../../lib/seoConfig";
import BlogIndex from "../../../components/BlogIndex";

export const metadata = createMetadata("ur", "blog");

export default function Page() {
  return <BlogIndex lang="ur" />;
}
