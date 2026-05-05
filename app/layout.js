import "./globals.css";

export const metadata = {
  title: "Free PDF Tools Online",
  description: "Convert JPG, PNG and merge PDF files online for free.",
  
  verification: {
    google: "Jr5DPyU3bIUowIsWmtUdP3ppLM6qyUwnMjGBgPcgZc0",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}