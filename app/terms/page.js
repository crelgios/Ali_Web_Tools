import { createPageMetadata } from "../../lib/seo";
import LocaleRedirect from "../../components/LocaleRedirect";

export const metadata = createPageMetadata("en", "terms");

export default function Page() {
  return <LocaleRedirect path="terms" />;
}
