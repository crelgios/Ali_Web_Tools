import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("pt", "top-free-pdf-tools-online");

export default function Page() {
  return <BlogPost lang="pt" slug="top-free-pdf-tools-online" />;
}
