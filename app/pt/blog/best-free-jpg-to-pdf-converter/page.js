import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("pt", "best-free-jpg-to-pdf-converter");

export default function Page() {
  return <BlogPost lang="pt" slug="best-free-jpg-to-pdf-converter" />;
}
