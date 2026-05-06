import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("zh-CN", "convert-excel-word-ppt-to-pdf-without-uploading-data");

export default function Page() {
  return <BlogPost lang="zh-CN" slug="convert-excel-word-ppt-to-pdf-without-uploading-data" />;
}
