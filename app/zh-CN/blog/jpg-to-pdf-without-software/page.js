import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("zh-CN", "jpg-to-pdf-without-software");

export default function Page() {
  return <BlogPost lang="zh-CN" slug="jpg-to-pdf-without-software" />;
}
