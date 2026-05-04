"use client";

import { useState } from "react";
import { jsPDF } from "jspdf";

export default function ImageToPdfTool({ type = "JPEG", title = "Image to PDF", language = "en" }) {
  const [files, setFiles] = useState([]);

  function handleFiles(e) {
    setFiles(Array.from(e.target.files || []));
  }

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
    const pageWidth = 210;
    const pageHeight = 297;

    for (let i = 0; i < files.length; i++) {
      const dataUrl = await readFile(files[i]);
      const img = new Image();
      img.src = dataUrl;

      await new Promise((resolve) => {
        img.onload = resolve;
      });

      if (i > 0) pdf.addPage();

      const imgRatio = img.width / img.height;
      let width = 190;
      let height = width / imgRatio;

      if (height > 277) {
        height = 277;
        width = height * imgRatio;
      }

      const x = (pageWidth - width) / 2;
      const y = (pageHeight - height) / 2;

      pdf.addImage(dataUrl, type, x, y, width, height);
    }

    pdf.save("converted.pdf");
    setFiles([]);
  }

  const text = {
    en: {
      sub: "Select your images and convert them into a PDF instantly.",
      empty: "No files selected",
      button: "Convert to PDF",
      privacy: "Your files are processed in your browser. We do not upload or store your files."
    },
    hi: {
      sub: "अपनी इमेज चुनें और तुरंत PDF बनाएं।",
      empty: "कोई फाइल चुनी नहीं गई",
      button: "PDF बनाएं",
      privacy: "आपकी फाइलें आपके ब्राउज़र में ही प्रोसेस होती हैं। हम आपकी फाइलें सेव नहीं करते।"
    },
    es: {
      sub: "Selecciona tus imágenes y conviértelas en PDF al instante.",
      empty: "No hay archivos seleccionados",
      button: "Convertir a PDF",
      privacy: "Tus archivos se procesan en tu navegador. No subimos ni guardamos tus archivos."
    }
  };

  const t = text[language] || text.en;

  return (
    <main className="container">
      <section className="hero">
        <h1>{title}</h1>
        <p>{t.sub}</p>
      </section>

      <div className="upload">
        <input
          type="file"
          accept={type === "PNG" ? "image/png" : "image/jpeg"}
          multiple
          onChange={handleFiles}
        />
        <p>{files.length ? `${files.length} file(s) selected` : t.empty}</p>
        <button className="btn" onClick={convert} disabled={!files.length}>
          {t.button}
        </button>
      </div>

      <div className="note">{t.privacy}</div>
    </main>
  );
}
