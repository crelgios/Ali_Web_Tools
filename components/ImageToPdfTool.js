"use client";
import { useState } from "react";
import { jsPDF } from "jspdf";
import { getText } from "../lib/translations";

export default function ImageToPdfTool({ type = "JPEG", title = "Image to PDF", language = "en" }) {
  const [files, setFiles] = useState([]);
  const t = getText(language);

  function handleFiles(e) { setFiles(Array.from(e.target.files || [])); }

  function readFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async function convert() {
    if (!files.length) return;
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = 210, pageHeight = 297;

    for (let i = 0; i < files.length; i++) {
      const dataUrl = await readFile(files[i]);
      const img = new Image();
      img.src = dataUrl;
      await new Promise((resolve) => { img.onload = resolve; });
      if (i > 0) pdf.addPage();
      const imgRatio = img.width / img.height;
      let width = 190, height = width / imgRatio;
      if (height > 277) { height = 277; width = height * imgRatio; }
      pdf.addImage(dataUrl, type, (pageWidth - width) / 2, (pageHeight - height) / 2, width, height);
    }
    pdf.save("converted.pdf");
    setFiles([]);
  }

  return (
    <main className="container">
      <section className="hero"><h1>{title}</h1><p>{t.selectImages}</p></section>
      <div className="upload">
        <input type="file" accept={type === "PNG" ? "image/png" : "image/jpeg"} multiple onChange={handleFiles} />
        <p>{files.length ? `${files.length} file(s) selected` : t.noFiles}</p>
        <button className="btn" onClick={convert} disabled={!files.length}>{t.convertBtn}</button>
      </div>
      <div className="note">{t.privacyImage}</div>
    </main>
  );
}
