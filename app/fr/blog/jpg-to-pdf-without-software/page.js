import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("fr", "jpg-to-pdf-without-software");

export default function Page() {
  return <BlogPost lang="fr" slug="jpg-to-pdf-without-software" />;
}
