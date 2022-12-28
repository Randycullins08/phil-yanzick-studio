export default function Footer() {
  function Mailto({ email, subject, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}`}>{props.children}</a>
    );
  }

  return (
    <div className="footer-container">
      <div className="footer-header">
        <h3>Phillip Yanzick</h3>
      </div>

      <div className="footer-content">
        <Mailto email="phillipyanzick@gmail.com" subject="Hello">
          phillipyanzick@gmail.com
        </Mailto>
      </div>
    </div>
  );
}
