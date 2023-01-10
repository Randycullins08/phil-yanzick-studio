import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [status, setStatus] = useState("Submit");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Submit");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form onSubmit={sendEmail} ref={form} className="contact-form">
      <div>
        <input
          type="text"
          id="from_name"
          name="from_name"
          placeholder="Enter Your Name"
          required
        />
      </div>

      <div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your Email"
          required
        />
      </div>

      <div>
        <textarea
          name="message"
          id="message"
          rows={10}
          placeholder="Enter Your Message"
        />
      </div>
      <div className="submit-button">
        <button type="submit">{status}</button>
      </div>
    </form>
  );
}
