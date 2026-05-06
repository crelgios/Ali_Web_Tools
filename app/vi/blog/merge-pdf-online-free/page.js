import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("vi", "merge-pdf-online-free");

export default function Page() {
  return <BlogPost lang="vi" slug="merge-pdf-online-free" />;
}
