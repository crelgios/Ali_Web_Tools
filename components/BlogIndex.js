import SiteShell from "./SiteShell";

const posts = [
  {
    title: "How to Convert Excel, Word, and PowerPoint to PDF Without Uploading Your Data",
    desc: "Learn safe ways to convert Excel, Word and PPT files to PDF using Save As, Export and Microsoft Print to PDF without uploading private files online.",
    slug: "convert-excel-word-ppt-to-pdf-without-uploading-data"
  },
  {
    title: "How to Convert JPG to PDF Without Software (Free & Fast)",
    desc: "Learn how to convert JPG to PDF online free without installing software. Fast, secure and easy method for mobile and desktop.",
    slug: "jpg-to-pdf-without-software"
  },
  {
    title: "Convert JPG to PDF on Mobile (No App Needed)",
    desc: "Convert JPG images to PDF on mobile without installing an app. Easy guide for Android, iPhone and browser users.",
    slug: "convert-jpg-to-pdf-mobile"
  },
  {
    title: "Best Free JPG to PDF Converter Online (No Signup Required)",
    desc: "Find out what makes a good free JPG to PDF converter online and convert images to PDF without signup.",
    slug: "best-free-jpg-to-pdf-converter"
  },
  {
    title: "How to Merge PDF Files Online Free Without Software",
    desc: "Learn how to merge PDF files online free without installing software. Combine PDF files into one document easily.",
    slug: "merge-pdf-online-free"
  },
  {
    title: "Top Free PDF Tools Online You Should Use in 2026",
    desc: "Discover useful free PDF tools online for converting JPG to PDF, PNG to PDF and merging PDF files.",
    slug: "top-free-pdf-tools-online"
  }
];

export default function BlogIndex({ lang = "en" }) {
  return (
    <SiteShell lang={lang}>
      <main className="container">
        <section className="hero">
          <h1>PDF Tools Blog</h1>
          <p>Simple guides to help you convert, merge and manage PDF files online.</p>
        </section>

        <section className="grid">
          {posts.map((post) => (
            <div className="card" key={post.slug}>
              <h2>{post.title}</h2>
              <p>{post.desc}</p>
              <a className="btn" href={`/${lang}/blog/${post.slug}`}>Read Guide</a>
            </div>
          ))}
        </section>
      </main>
    </SiteShell>
  );
}
