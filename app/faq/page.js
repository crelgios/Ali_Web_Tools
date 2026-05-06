import { createPageMetadata } from "../../lib/seo";
import LocaleRedirect from "../../components/LocaleRedirect";

export const metadata = createPageMetadata("en", "faq");

export default function Page() {
  return <LocaleRedirect path="faq" />;
}
