import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("es", "merge-pdf-online-free");

export default function Page() {
  return <BlogPost lang="es" slug="merge-pdf-online-free" />;
}
