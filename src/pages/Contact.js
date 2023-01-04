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
          {/* <form onSubmit={handleSubmit} method="post">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="message">Message</label>
            <textarea
              type="textarea"
              name="textValue"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Send!</button>
          </form> */}
          <form method="POST" name="contactform" className="contactForm">
            <input type="hidden" name="form-name" value="contactForm" />
            <input type="text" name="name" placeholder="Enter your name" />

            <input type="email" name="email" placeholder="Enter your email" />

            <textarea name="message" placeholder="Messaage"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
