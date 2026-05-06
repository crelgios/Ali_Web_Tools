import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("ru", "top-free-pdf-tools-online");

export default function Page() {
  return <BlogPost lang="ru" slug="top-free-pdf-tools-online" />;
}
