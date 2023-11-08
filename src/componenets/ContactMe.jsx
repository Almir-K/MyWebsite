import React from "react";
import Git from "../assets/github.svg";
import insta from "../assets/instagram.svg";
import linked from "../assets/linkedin.svg";

const ContactMe = () => {
  return (
    <footer className="footer" id="contact-me">
      <div className="person-info">
        <h3>Almir Krueziu</h3>
      </div>
      <div className="contact-info">
        <span className="phone">📲 +46735269716</span>
        <span className="email">📩 AlmirKrueziu92@gmail.com</span>
        <span className="place">📌 Sweden Åstorp 26531</span>
      </div>
      <div className="social-media">
        <br />
        <ul className="social-links">
          <li>
            <a href="https://www.instagram.com/akzmedia92/">
              <img src={insta} alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Almir-K">
              <img src={Git} alt="Github" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/almir-k-a9226522b/">
              <img src={linked} alt="Linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default ContactMe;
