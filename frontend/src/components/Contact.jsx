import React from "react";
import ContactImage from "../ClipsComponents/ContactImage";

const Contact = () => {
  return (
    <>
      <div id="contact" className="contact-container">
        <ContactImage />
        <h1>Contact Us</h1>
        <p>
          Have questions or inquiries? Feel free to reach out to us through our
          social media channels or drop us an email. We're always here to assist
          you!
        </p>
        {/* <div className="social-media">
          <a href="#" className="social-link">
            Facebook
          </a>
          <a href="#" className="social-link">
            Twitter
          </a>
          <a href="#" className="social-link">
            Instagram
          </a>
        </div> */}
        <a href="mailto:methi@yourcompany.com">methicollab@gmail.com</a>
        <footer className="footer">
          <p>&copy; 2024 MethiCollab. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default Contact;
