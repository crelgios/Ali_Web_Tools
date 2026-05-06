import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("ko", "merge-pdf-online-free");

export default function Page() {
  return <BlogPost lang="ko" slug="merge-pdf-online-free" />;
}
