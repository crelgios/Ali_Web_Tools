import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("fr", "best-free-jpg-to-pdf-converter");

export default function Page() {
  return <BlogPost lang="fr" slug="best-free-jpg-to-pdf-converter" />;
}
