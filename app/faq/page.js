import SiteShell from "../../components/SiteShell";

export const metadata = {
  title: "FAQ | PDF Tools",
  description: "Frequently asked questions about PDF Tools, file privacy, JPG to PDF, PNG to PDF, and PDF merge."
};

const faqs = [
  {
    q: "Are my files uploaded to your server?",
    a: "For the included browser-based tools, files are processed in your browser whenever possible. We do not store your files."
  },
  {
    q: "Is this PDF tool free?",
    a: "Yes, the basic JPG to PDF, PNG to PDF, and Merge PDF tools are free to use."
  },
  {
    q: "Can I use this on mobile?",
    a: "Yes, the website is mobile-friendly and works on phones, tablets, and computers."
  },
  {
    q: "Why is my file not converting?",
    a: "Make sure you selected the correct file type. JPG to PDF accepts JPG/JPEG files, PNG to PDF accepts PNG files, and Merge PDF accepts PDF files."
  },
  {
    q: "Do I need to create an account?",
    a: "No account or signup is required to use the tools."
  }
];

export default function Page() {
  return (
    <SiteShell lang="en">
      <main className="container">
        <section className="hero">
          <h1>Frequently Asked Questions</h1>
          <p>Answers to common questions about our free online PDF tools.</p>
        </section>

        <section className="faq-list">
          {faqs.map((item) => (
            <div className="card faq-card" key={item.q}>
              <h2>{item.q}</h2>
              <p>{item.a}</p>
            </div>
          ))}
        </section>
      </main>
    </SiteShell>
  );
}
