import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("ko", "jpg-to-pdf-without-software");

export default function Page() {
  return <BlogPost lang="ko" slug="jpg-to-pdf-without-software" />;
}
