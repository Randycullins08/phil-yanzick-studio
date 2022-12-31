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
          <form action="" method="post">
            <label htmlFor="name">Name</label>
            <input type="text" />
            <label htmlFor="email">Email</label>
            <input type="email" />
            <label htmlFor="message">Message</label>
            <textarea type="textarea" name="textValue" rows={5} />
          </form>
        </div>
      </div>
    </div>
  );
}
