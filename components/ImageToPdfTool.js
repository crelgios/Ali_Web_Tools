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

  return (
    <main className="container">
      <section className="hero">
        <h1>{title}</h1>
        <p>
          {language === "hi"
            ? "अपनी इमेज चुनें और तुरंत PDF बनाएं।"
            : "Select your images and convert them into a PDF instantly."}
        </p>
      </section>

      <div className="upload">
        <input
          type="file"
          accept={type === "PNG" ? "image/png" : "image/jpeg"}
          multiple
          onChange={handleFiles}
        />
        <p>{files.length ? `${files.length} file(s) selected` : "No files selected"}</p>
        <button className="btn" onClick={convert} disabled={!files.length}>
          {language === "hi" ? "PDF बनाएं" : "Convert to PDF"}
        </button>
      </div>

      <div className="note">
        {language === "hi"
          ? "आपकी फाइलें आपके ब्राउज़र में ही प्रोसेस होती हैं। हम आपकी फाइलें सेव नहीं करते।"
          : "Your files are processed in your browser. We do not upload or store your files."}
      </div>
    </main>
  );
}
