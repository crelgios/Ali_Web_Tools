import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("tr", "best-free-jpg-to-pdf-converter");

export default function Page() {
  return <BlogPost lang="tr" slug="best-free-jpg-to-pdf-converter" />;
}
