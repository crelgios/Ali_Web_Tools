import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("ar", "jpg-to-pdf-without-software");

export default function Page() {
  return <BlogPost lang="ar" slug="jpg-to-pdf-without-software" />;
}
