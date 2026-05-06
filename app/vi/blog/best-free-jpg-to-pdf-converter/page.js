import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("vi", "best-free-jpg-to-pdf-converter");

export default function Page() {
  return <BlogPost lang="vi" slug="best-free-jpg-to-pdf-converter" />;
}
