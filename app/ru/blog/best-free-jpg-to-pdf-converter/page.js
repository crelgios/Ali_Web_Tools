import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("ru", "best-free-jpg-to-pdf-converter");

export default function Page() {
  return <BlogPost lang="ru" slug="best-free-jpg-to-pdf-converter" />;
}
