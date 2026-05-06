import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("ko", "convert-jpg-to-pdf-mobile");

export default function Page() {
  return <BlogPost lang="ko" slug="convert-jpg-to-pdf-mobile" />;
}
