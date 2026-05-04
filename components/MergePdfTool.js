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

  return (
    <main className="container">
      <section className="hero">
        <h1>{language === "hi" ? "PDF मिलाएं" : "Merge PDF"}</h1>
        <p>
          {language === "hi"
            ? "कई PDF फाइलों को एक PDF में मिलाएं।"
            : "Combine multiple PDF files into one PDF."}
        </p>
      </section>

      <div className="upload">
        <input type="file" accept="application/pdf" multiple onChange={handleFiles} />
        <p>{files.length ? `${files.length} file(s) selected` : "No files selected"}</p>
        <button className="btn" onClick={mergePDFs} disabled={!files.length}>
          {language === "hi" ? "PDF मिलाएं" : "Merge PDF"}
        </button>
      </div>

      <div className="note">
        {language === "hi"
          ? "आपकी PDF फाइलें आपके ब्राउज़र में ही प्रोसेस होती हैं।"
          : "Your PDF files are processed in your browser and are not stored."}
      </div>
    </main>
  );
}
