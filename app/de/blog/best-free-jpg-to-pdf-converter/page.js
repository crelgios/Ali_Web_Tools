import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("de", "best-free-jpg-to-pdf-converter");

export default function Page() {
  return <BlogPost lang="de" slug="best-free-jpg-to-pdf-converter" />;
}
