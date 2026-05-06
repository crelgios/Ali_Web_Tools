import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("ur", "best-free-jpg-to-pdf-converter");

export default function Page() {
  return <BlogPost lang="ur" slug="best-free-jpg-to-pdf-converter" />;
}
