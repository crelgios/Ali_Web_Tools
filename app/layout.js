import "./globals.css";

export const metadata = {
  title: "Free PDF Tools Online",
  description: "Convert JPG, PNG and merge PDF files online for free. Fast, secure and browser-based."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
