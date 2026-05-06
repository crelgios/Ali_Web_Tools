import "./globals.css";
import { SITE_URL, SITE_NAME } from "../lib/seoConfig";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: "Free PDF and image tools online. Files are processed privately in your browser.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
