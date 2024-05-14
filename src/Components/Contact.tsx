import "../CSS/Contact.scss"
import { emailAddress, subject, body } from "../Config/config"

function Contact() {
  // const mailTo = `mailto:${emailAddress}?subject=${subject}&body=${body}`

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact</h2>
      <h3>Thanks for visiting my site! </h3>
      <div className="contact-text">
        I am ideally looking for Frontend and Full-stack Developer positions for
        my next role. It would be great to hear about any opportunities which I
        could be suitable for.
      </div>
      <div>
        <span className="contact-detail">Email: </span>
        <a
          className="contact-link"
          href={`mailto:${emailAddress}?subject=${subject}&body=${body}`}
        >
          olivercase-green@hotmail.co.uk
        </a>
      </div>
      <div>
        <span className="contact-detail">GitHub: </span>
        <a
          className="contact-link"
          href="https://github.com/olliecase-green"
          rel="noopener noreferrer"
          target="_blank"
        >
          github.com/olliecase-green
        </a>
      </div>
      <div>
        <span className="contact-detail">LinkedIn: </span>
        <a
          className="contact-link"
          href="https://linkedin.com/in/oliver-case-green-40001416a/"
          rel="noopener noreferrer"
          target="_blank"
        >
          linkedin.com/in/oliver-case-green-40001416a/
        </a>
      </div>
    </div>
  )
}

export default Contact
