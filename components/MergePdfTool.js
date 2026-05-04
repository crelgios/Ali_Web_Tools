"use client";
import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { getText } from "../lib/translations";

export default function MergePdfTool({ language = "en" }) {
  const [files, setFiles] = useState([]);
  const t = getText(language);

  function handleFiles(e) { setFiles(Array.from(e.target.files || [])); }

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
    a.href = url; a.download = "merged.pdf"; a.click();
    URL.revokeObjectURL(url);
    setFiles([]);
  }

  return (
    <main className="container">
      <section className="hero"><h1>{t.merge}</h1><p>{t.mergeSub}</p></section>
      <div className="upload">
        <input type="file" accept="application/pdf" multiple onChange={handleFiles} />
        <p>{files.length ? `${files.length} file(s) selected` : t.noFiles}</p>
        <button className="btn" onClick={mergePDFs} disabled={!files.length}>{t.mergeBtn}</button>
      </div>
      <div className="note">{t.privacyPdf}</div>
    </main>
  );
}
