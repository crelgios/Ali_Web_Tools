import "./globals.css";

export const metadata = {
  title: "Ali W Vide",
  description: "Free PDF and Image Tools Online",
  alternates: {
    canonical: "https://www.aliwvide.com/en",
    languages: {
      en: "https://www.aliwvide.com/en",
      hi: "https://www.aliwvide.com/hi",
      ar: "https://www.aliwvide.com/ar",
      "zh-CN": "https://www.aliwvide.com/zh-CN",
      tr: "https://www.aliwvide.com/tr",
      ru: "https://www.aliwvide.com/ru",
      es: "https://www.aliwvide.com/es",
      fr: "https://www.aliwvide.com/fr",
      de: "https://www.aliwvide.com/de",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
