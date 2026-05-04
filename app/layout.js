import "./globals.css";

export const metadata = {
  title: "Free PDF Tools Online",
  description: "Convert JPG, PNG and merge PDF files online for free. Fast, secure and browser-based.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="nav">
          <div className="nav-inner">
            <a className="logo" href="/">PDF Tools</a>
            <div className="links">
              <a href="/en/jpg-to-pdf">JPG to PDF</a>
              <a href="/en/png-to-pdf">PNG to PDF</a>
              <a href="/en/merge-pdf">Merge PDF</a>
              <a href="/hi/jpg-to-pdf">हिंदी</a>
            </div>
          </div>
        </div>
        {children}
        <div className="footer">
          Files are processed in your browser. We do not store your files.
        </div>
      </body>
    </html>
  );
}
