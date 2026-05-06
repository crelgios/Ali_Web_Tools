import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("pl", "best-free-jpg-to-pdf-converter");

export default function Page() {
  return <BlogPost lang="pl" slug="best-free-jpg-to-pdf-converter" />;
}
