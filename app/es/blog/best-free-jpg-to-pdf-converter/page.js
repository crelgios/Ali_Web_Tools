import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("es", "best-free-jpg-to-pdf-converter");

export default function Page() {
  return <BlogPost lang="es" slug="best-free-jpg-to-pdf-converter" />;
}
