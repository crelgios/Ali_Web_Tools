import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("vi", "jpg-to-pdf-without-software");

export default function Page() {
  return <BlogPost lang="vi" slug="jpg-to-pdf-without-software" />;
}
