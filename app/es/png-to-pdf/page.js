import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = {
  title: "Convertir PNG a PDF Gratis Online",
  description: "Convierte imágenes PNG a PDF online gratis, rápido y seguro.",
  alternates: {
    languages: {
      en: "/en/png-to-pdf",
      hi: "/hi/png-to-pdf",
      es: "/es/png-to-pdf"
    }
  }
};

export default function Page() {
  return <ImageToPdfTool type="PNG" title="Convertir PNG a PDF" language="es" />;
}
