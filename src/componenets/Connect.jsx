import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import "../style/Myvideo.css";
import { Link as ReactRouterLink } from "react-router-dom";

const Connect = () => {
  return (
    <div id="connect-details" className="connect-footer">
      <p
        className="socialmedia-icons"
        style={{ fontSize: "30px", fontWeight: "bold" }}
      ></p>
      <div className="socialmedia-icons">
        <div>
          <a href="https://www.instagram.com/akzmedia92/">
            <FaInstagram className="your-instagram-link" />
          </a>{" "}
        </div>
        <a href="https://www.linkedin.com/in/almir-k-a9226522b/">
          <div>
            <FaLinkedin className="your-linkedin-link" />
          </div>
        </a>
        <a href="https://www.youtube.com/channel/UCRvImYoJpk8PC1jX6bx-tfw">
          <div>
            <FaYoutube className="your-youtube-link" />
          </div>
        </a>
      </div>
      <div className="footer-background">
        <p className="text-contact-me">
          I'm passionate about videography and photography, and I'm the one who
          brings the moments to life. Feel free to reach out for more
          information and pricing details.
        </p>

        <div className="contact-info">
          <h3>📩 Almirkrueziu@gmail.com</h3>
          <h3>📲 +735269716</h3>
        </div>
        <div className="buttons-link">
          <ReactRouterLink to="/photo" className="nav-link">
            PHOTO
          </ReactRouterLink>
          <ReactRouterLink to="/videos" className="nav-link">
            VIDEOS
          </ReactRouterLink>
        </div>
      </div>

      <div className="contact-me-info">
        <img className="akzmedia" src="../src/assets/akzmedia.png" alt="" />
      </div>
    </div>
  );
};

export default Connect;
