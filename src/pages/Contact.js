import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact</h1>
      </div>

      <div className="contact-content">
        <div className="image-wrapper">
          <img src="/img/phil2.jpeg" alt="phil" />
        </div>

        <div className="form-wrapper">
          <div className="form-header">
            <h1>Book The Space</h1>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
