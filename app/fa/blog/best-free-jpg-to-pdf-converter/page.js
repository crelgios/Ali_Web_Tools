import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("fa", "best-free-jpg-to-pdf-converter");

export default function Page() {
  return <BlogPost lang="fa" slug="best-free-jpg-to-pdf-converter" />;
}
