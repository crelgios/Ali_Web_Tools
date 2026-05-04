import SiteShell from "../../components/SiteShell";

export const metadata = {
  title: "Contact Us | PDF Tools",
  description: "Contact PDF Tools for support, feedback, business inquiries, or help with online PDF tools."
};

export default function Page() {
  return (
    <SiteShell lang="en">
      <main className="container">
        <section className="hero">
          <h1>Contact Us</h1>
          <p>Need help, found a problem, or want to share feedback? Send us a message.</p>
        </section>

        <section className="contact-grid">
          <div className="card">
            <h2>Send us a message</h2>

            <form
              action="https://formspree.io/f/xqenplzg"
              method="POST"
            >
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required className="input" placeholder="Your name" />

              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required className="input" placeholder="you@example.com" />

              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" required className="input" placeholder="How can we help?" />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required rows="6" className="input" placeholder="Write your message here"></textarea>

              <button className="btn contact-btn" type="submit">Send Message</button>
            </form>

            <p className="small-note">
              Replace <b>YOUR_FORM_ID</b> with your Formspree form ID to make this form send emails.
            </p>
          </div>

          <aside className="card">
            <h2>Support</h2>
            <p>For tool issues, bug reports, feedback, or business inquiries, contact us by email.</p>

            <div className="contact-box">
              <h3>Email</h3>
              <p>support@yourdomain.com</p>
            </div>

            <div className="contact-box">
              <h3>Business</h3>
              <p>business@yourdomain.com</p>
            </div>

            <div className="contact-box">
              <h3>Privacy</h3>
              <p>Your files are processed in your browser whenever possible. We do not store your files.</p>
            </div>
          </aside>
        </section>
      </main>
    </SiteShell>
  );
}
