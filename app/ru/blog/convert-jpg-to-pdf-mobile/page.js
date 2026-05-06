import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("ru", "convert-jpg-to-pdf-mobile");

export default function Page() {
  return <BlogPost lang="ru" slug="convert-jpg-to-pdf-mobile" />;
}
