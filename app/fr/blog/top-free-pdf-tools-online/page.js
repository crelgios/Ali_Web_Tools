import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("fr", "top-free-pdf-tools-online");

export default function Page() {
  return <BlogPost lang="fr" slug="top-free-pdf-tools-online" />;
}
