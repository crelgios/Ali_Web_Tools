import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("bn", "best-free-jpg-to-pdf-converter");

export default function Page() {
  return <BlogPost lang="bn" slug="best-free-jpg-to-pdf-converter" />;
}
