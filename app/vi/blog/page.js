import { createMetadata } from "../../../lib/seoConfig";
import BlogIndex from "../../../components/BlogIndex";

export const metadata = createMetadata("vi", "blog");

export default function Page() {
  return <BlogIndex lang="vi" />;
}
