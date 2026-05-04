"use client";

import { useEffect } from "react";

const supported = [
  "en", "zh-CN", "es", "hi", "ar", "pt",
  "fr", "de", "ja", "ru", "id", "tr",
  "ko", "it", "nl", "pl", "th", "vi",
  "bn", "ur", "fa", "ms"
];

export default function Page() {
  useEffect(() => {
    const fullLang = navigator.language || "en";
    const shortLang = fullLang.slice(0, 2);

    if (supported.includes(fullLang)) {
      window.location.replace(`/${fullLang}`);
      return;
    }

    if (shortLang === "zh") {
      window.location.replace("/zh-CN");
      return;
    }

    if (supported.includes(shortLang)) {
      window.location.replace(`/${shortLang}`);
      return;
    }

    window.location.replace("/en");
  }, []);

  return (
    <main className="container">
      <section className="hero">
        <h1>Free Online PDF Tools</h1>
        <p>Loading your language...</p>
      </section>
    </main>
  );
}
