import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("ru", "jpg-to-pdf-without-software");

export default function Page() {
  return <BlogPost lang="ru" slug="jpg-to-pdf-without-software" />;
}
