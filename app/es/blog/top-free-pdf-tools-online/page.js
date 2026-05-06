import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("es", "top-free-pdf-tools-online");

export default function Page() {
  return <BlogPost lang="es" slug="top-free-pdf-tools-online" />;
}
