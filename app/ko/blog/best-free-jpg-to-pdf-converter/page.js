import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("ko", "best-free-jpg-to-pdf-converter");

export default function Page() {
  return <BlogPost lang="ko" slug="best-free-jpg-to-pdf-converter" />;
}
