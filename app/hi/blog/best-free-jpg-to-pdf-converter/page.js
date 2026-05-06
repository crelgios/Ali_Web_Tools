import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("hi", "best-free-jpg-to-pdf-converter");

export default function Page() {
  return <BlogPost lang="hi" slug="best-free-jpg-to-pdf-converter" />;
}
