import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("tr", "jpg-to-pdf-without-software");

export default function Page() {
  return <BlogPost lang="tr" slug="jpg-to-pdf-without-software" />;
}
