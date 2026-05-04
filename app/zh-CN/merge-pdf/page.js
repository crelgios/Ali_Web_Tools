import SiteShell from "../../../components/SiteShell";
import MergePdfTool from "../../../components/MergePdfTool";
import { getHreflang } from "../../../lib/translations";

export const metadata = {
  title: "合并 PDF",
  description: "将多个 PDF 文件合并为一个 PDF。",
  alternates: {
    canonical: "/zh-CN/merge-pdf",
    languages: getHreflang("merge-pdf")
  }
};

export default function Page() {
  return (
    <SiteShell lang="zh-CN">
      <MergePdfTool language="zh-CN" />
    </SiteShell>
  );
}
