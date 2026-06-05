import MobileMenu from "@/components/MobileMenu";
import SiteFooter from "@/components/SiteFooter";
export const metadata = {
  title: "Contact | Cigar Ledger",
  description: "Contact Vanta Labs for Cigar Ledger support, cigar price questions or partnership enquiries.",
};

export default function Contact() {
  return (
    <main className="page">
      <header>
        <a href="/" className="brand">Cigar Ledger</a>

        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
        <MobileMenu />
      </header>

      <section className="hero smallHero contactPageHero">
        <span className="kicker">Contact</span>
        <h1>Questions or support?</h1>
        <p>
          Send a message to Vanta Labs about Cigar Ledger, Herf Station, cigar
          price data or support.
        </p>

        <form
          className="contactForm"
          action="https://formsubmit.co/support@vantalabs.co.uk"
          method="post"
        >
          <div className="contactFormGrid">
            <label>
              Name
              <input type="text" name="name" required />
            </label>

            <label>
              Email
              <input type="email" name="email" required />
            </label>
          </div>

          <label>
            Message
            <textarea name="message" rows={6} required />
          </label>

          <input type="hidden" name="_subject" value="New Cigar Ledger contact page message" />
          <input type="hidden" name="_url" value="https://www.cigarledger.co.uk/contact" />
          <input type="hidden" name="_next" value="https://www.cigarledger.co.uk/contact?message=sent" />

          <button className="button" type="submit">
            Send Message
          </button>
        </form>
      </section>

      <SiteFooter />
    </main>
  );
}
