import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("th", "jpg-to-pdf-without-software");

export default function Page() {
  return <BlogPost lang="th" slug="jpg-to-pdf-without-software" />;
}
