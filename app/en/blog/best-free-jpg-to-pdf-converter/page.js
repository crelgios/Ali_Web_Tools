import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("en", "best-free-jpg-to-pdf-converter");

export default function Page() {
  return <BlogPost lang="en" slug="best-free-jpg-to-pdf-converter" />;
}
