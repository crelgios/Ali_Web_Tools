import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("ja", "convert-jpg-to-pdf-mobile");

export default function Page() {
  return <BlogPost lang="ja" slug="convert-jpg-to-pdf-mobile" />;
}
