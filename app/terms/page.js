import { createMetadata } from "../../lib/seoConfig";
import LocaleRedirect from "../../components/LocaleRedirect";

export const metadata = createMetadata("en", "terms");

export default function Page() {
  return <LocaleRedirect path="terms" />;
}
