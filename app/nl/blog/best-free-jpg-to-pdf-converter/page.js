import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("nl", "best-free-jpg-to-pdf-converter");

export default function Page() {
  return <BlogPost lang="nl" slug="best-free-jpg-to-pdf-converter" />;
}
