import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("es", "jpg-to-pdf-without-software");

export default function Page() {
  return <BlogPost lang="es" slug="jpg-to-pdf-without-software" />;
}
