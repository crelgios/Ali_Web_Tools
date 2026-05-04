"use client";

import { useEffect } from "react";
import { languageOptions } from "../lib/translations";

export default function LocaleRedirect({ path = "" }) {
  useEffect(() => {
    const codes = languageOptions.map((l) => l.code);
    const saved = typeof window !== "undefined" ? localStorage.getItem("siteLang") : null;
    const lang = codes.includes(saved) ? saved : "en";
    const cleanPath = String(path || "").replace(/^\/+|\/+$/g, "");
    window.location.replace(cleanPath ? `/${lang}/${cleanPath}` : `/${lang}`);
  }, [path]);

  return (
    <main className="container">
      <section className="hero">
        <h1>Loading...</h1>
        <p>Please wait while we open this page in your selected language.</p>
      </section>
    </main>
  );
}
