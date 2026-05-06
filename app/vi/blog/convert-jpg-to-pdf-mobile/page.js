import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("vi", "convert-jpg-to-pdf-mobile");

export default function Page() {
  return <BlogPost lang="vi" slug="convert-jpg-to-pdf-mobile" />;
}
