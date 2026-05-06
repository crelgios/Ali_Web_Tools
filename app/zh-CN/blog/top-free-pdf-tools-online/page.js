import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("zh-CN", "top-free-pdf-tools-online");

export default function Page() {
  return <BlogPost lang="zh-CN" slug="top-free-pdf-tools-online" />;
}
