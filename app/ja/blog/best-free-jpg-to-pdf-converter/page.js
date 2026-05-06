import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("ja", "best-free-jpg-to-pdf-converter");

export default function Page() {
  return <BlogPost lang="ja" slug="best-free-jpg-to-pdf-converter" />;
}
