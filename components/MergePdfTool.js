"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";

export default function MergePdfTool({ language = "en" }) {
  const [files, setFiles] = useState([]);

  function handleFiles(e) {
    setFiles(Array.from(e.target.files || []));
  }

  function readFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  }

  async function mergePDFs() {
    if (!files.length) return;

    const mergedPdf = await PDFDocument.create();

    for (const file of files) {
      const bytes = await readFile(file);
      const pdf = await PDFDocument.load(bytes);
      const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      copiedPages.forEach((page) => mergedPdf.addPage(page));
    }

    const mergedBytes = await mergedPdf.save();
    const blob = new Blob([mergedBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "merged.pdf";
    a.click();

    URL.revokeObjectURL(url);
    setFiles([]);
  }

  const text = {
    en: {
      title: "Merge PDF",
      sub: "Combine multiple PDF files into one PDF.",
      empty: "No files selected",
      button: "Merge PDF",
      privacy: "Your PDF files are processed in your browser and are not stored."
    },
    hi: {
      title: "PDF मिलाएं",
      sub: "कई PDF फाइलों को एक PDF में मिलाएं।",
      empty: "कोई फाइल चुनी नहीं गई",
      button: "PDF मिलाएं",
      privacy: "आपकी PDF फाइलें आपके ब्राउज़र में ही प्रोसेस होती हैं।"
    },
    es: {
      title: "Unir PDF",
      sub: "Combina varios archivos PDF en un solo PDF.",
      empty: "No hay archivos seleccionados",
      button: "Unir PDF",
      privacy: "Tus archivos PDF se procesan en tu navegador y no se guardan."
    }
  };

  const t = text[language] || text.en;

  return (
    <main className="container">
      <section className="hero">
        <h1>{t.title}</h1>
        <p>{t.sub}</p>
      </section>

      <div className="upload">
        <input type="file" accept="application/pdf" multiple onChange={handleFiles} />
        <p>{files.length ? `${files.length} file(s) selected` : t.empty}</p>
        <button className="btn" onClick={mergePDFs} disabled={!files.length}>
          {t.button}
        </button>
      </div>

      <div className="note">{t.privacy}</div>
    </main>
  );
}
