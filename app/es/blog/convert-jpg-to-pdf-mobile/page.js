import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("es", "convert-jpg-to-pdf-mobile");

export default function Page() {
  return <BlogPost lang="es" slug="convert-jpg-to-pdf-mobile" />;
}
