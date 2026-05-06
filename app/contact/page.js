import { createPageMetadata } from "../../lib/seo";
import LocaleRedirect from "../../components/LocaleRedirect";

export const metadata = createPageMetadata("en", "contact");

export default function Page() {
  return <LocaleRedirect path="contact" />;
}
