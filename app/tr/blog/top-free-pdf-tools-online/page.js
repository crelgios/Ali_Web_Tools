import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("tr", "top-free-pdf-tools-online");

export default function Page() {
  return <BlogPost lang="tr" slug="top-free-pdf-tools-online" />;
}
