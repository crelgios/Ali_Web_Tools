import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("ar", "top-free-pdf-tools-online");

export default function Page() {
  return <BlogPost lang="ar" slug="top-free-pdf-tools-online" />;
}
