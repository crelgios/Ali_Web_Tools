import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("th", "top-free-pdf-tools-online");

export default function Page() {
  return <BlogPost lang="th" slug="top-free-pdf-tools-online" />;
}
