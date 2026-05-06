import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("ms", "best-free-jpg-to-pdf-converter");

export default function Page() {
  return <BlogPost lang="ms" slug="best-free-jpg-to-pdf-converter" />;
}
