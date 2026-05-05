import SiteShell from "../../../components/SiteShell";
import { getTrustHreflang } from "../../../lib/trustTranslations";

export const metadata = {
  title: "Contact Us | Ali W Vide",
  description: "Have a question or need help? Send us a message.",
  alternates: {
    canonical: "/en/contact",
    languages: getTrustHreflang("contact")
  }
};

export default function Page() {
  return (
    <SiteShell lang="en">
      <main className="container">
        <section className="hero">
          <h1>Contact Us</h1>
          <p>Have a question or need help? Send us a message.</p>
        </section>

        <div className="card" style={{ maxWidth: "600px", margin: "auto" }}>
          <form action="https://formspree.io/f/xqenplzg" method="POST">
            <label>Name</label>
            <input type="text" name="name" required className="input" placeholder="Your name" />

            <label>Email</label>
            <input type="email" name="email" required className="input" placeholder="your@email.com" />

            <label>Message</label>
            <textarea name="message" required rows="6" className="input" placeholder="Write your message here"></textarea>

            <button className="btn" style={{ width: "100%" }} type="submit">
              Send Message
            </button>
          </form>
        </div>
      </main>
    </SiteShell>
  );
}
