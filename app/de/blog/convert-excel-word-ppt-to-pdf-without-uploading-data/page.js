import { createBlogMetadata } from "../../../../lib/seoConfig";
import BlogPost from "../../../../components/BlogPost";

export const metadata = createBlogMetadata("de", "convert-excel-word-ppt-to-pdf-without-uploading-data");

export default function Page() {
  return <BlogPost lang="de" slug="convert-excel-word-ppt-to-pdf-without-uploading-data" />;
}
