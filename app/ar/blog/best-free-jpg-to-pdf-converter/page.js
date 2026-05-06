import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("ar", "best-free-jpg-to-pdf-converter");

export default function Page() {
  return <BlogPost lang="ar" slug="best-free-jpg-to-pdf-converter" />;
}
