import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("de", "jpg-to-pdf-without-software");

export default function Page() {
  return <BlogPost lang="de" slug="jpg-to-pdf-without-software" />;
}
