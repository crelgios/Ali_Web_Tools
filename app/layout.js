import "./globals.css";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata("en", "home");

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
