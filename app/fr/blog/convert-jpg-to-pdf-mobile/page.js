import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("fr", "convert-jpg-to-pdf-mobile");

export default function Page() {
  return <BlogPost lang="fr" slug="convert-jpg-to-pdf-mobile" />;
}
