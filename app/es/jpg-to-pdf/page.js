import ImageToPdfTool from "../../../components/ImageToPdfTool";

export const metadata = {
  title: "Convertir JPG a PDF Gratis Online",
  description: "Convierte imágenes JPG a PDF online gratis, rápido y seguro.",
  alternates: {
    languages: {
      en: "/en/jpg-to-pdf",
      hi: "/hi/jpg-to-pdf",
      es: "/es/jpg-to-pdf"
    }
  }
};

export default function Page() {
  return <ImageToPdfTool type="JPEG" title="Convertir JPG a PDF" language="es" />;
}
