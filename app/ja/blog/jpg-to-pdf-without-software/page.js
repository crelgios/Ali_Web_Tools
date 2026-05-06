import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("ja", "jpg-to-pdf-without-software");

export default function Page() {
  return <BlogPost lang="ja" slug="jpg-to-pdf-without-software" />;
}
