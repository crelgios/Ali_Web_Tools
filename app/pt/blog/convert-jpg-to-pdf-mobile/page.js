import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("pt", "convert-jpg-to-pdf-mobile");

export default function Page() {
  return <BlogPost lang="pt" slug="convert-jpg-to-pdf-mobile" />;
}
