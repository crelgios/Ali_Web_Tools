import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("vi", "convert-excel-word-ppt-to-pdf-without-upload");

export default function Page() {
  return <BlogPost lang="vi" slug="convert-excel-word-ppt-to-pdf-without-uploading-data" />;
}
