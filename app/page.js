const tools = [
  { title: "JPG to PDF", desc: "Convert JPG images into PDF files instantly.", link: "/en/jpg-to-pdf" },
  { title: "PNG to PDF", desc: "Convert PNG images into PDF files online.", link: "/en/png-to-pdf" },
  { title: "Merge PDF", desc: "Combine multiple PDF files into one PDF.", link: "/en/merge-pdf" },
];

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <h1>Free Online PDF Tools</h1>
        <p>Convert images to PDF and merge PDF files fast, free and securely.</p>
      </section>

      <section className="grid">
        {tools.map((tool) => (
          <div className="card" key={tool.title}>
            <h2>{tool.title}</h2>
            <p>{tool.desc}</p>
            <a className="btn" href={tool.link}>Use Tool</a>
          </div>
        ))}
      </section>

      <div className="note">
        Your files are processed inside your browser and are not uploaded to our server.
      </div>
    </main>
  );
}
