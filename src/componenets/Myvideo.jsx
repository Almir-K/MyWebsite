import React, { useEffect } from "react";
import { Link as ReactRouterLink } from "react-router-dom"; // Import ReactRouterLink
import VerticalSlider from "./VerticalSlider";
import Connect from "../componenets/Connect";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import "../style/Myvideo.css";
const Myvideo = () => {
  useEffect(() => {
    const photos = document.querySelector(".photos");
    let speed = 50;
    photos.innerHTML += photos.innerHTML;
    let distance = 0;

    const movePhotos = () => {
      if (!photos.classList.contains("paused")) {
        distance -= 1.5;
        photos.style.transform = `translateX(${distance}px)`;

        if (distance <= -photos.offsetWidth / 0) {
          distance = 1;
          photos.style.transform = `translateX(${distance}px)`;
        }
      }
    };

    const timer = setInterval(movePhotos, speed);

    const photoContainers = document.querySelectorAll(".photo-container");
    photoContainers.forEach(container => {
      container.addEventListener("mouseenter", () => {
        photos.classList.add("paused");
      });
      container.addEventListener("mouseleave", () => {
        photos.classList.remove("paused");
      });
    });

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="myvideo-container">
      {" "}
      <div className="sticky-icons">
        <div className="icon-column">
          <FaInstagram className="your-instagram-link" />
        </div>
        <div className="icon-column">
          <a href="your-linkedin-link">
            <FaLinkedin className="your-linkedin-link" />
          </a>
        </div>
        <div className="icon-column">
          <a href="your-youtube-link">
            <FaYoutube className="your-youtube-link" />
          </a>
        </div>
      </div>
      <div className="nav-container">
        <div className="name">Almir Krueziu</div>

        <div className="buttons">
          <ReactRouterLink to="/photo" className="nav-link">
            PHOTO
          </ReactRouterLink>
          <ReactRouterLink to="/videos" className="nav-link">
            VIDEOS {/* New "Videos" button */}
          </ReactRouterLink>
          <ReactRouterLink to="/connect-details" className="nav-link">
            CONNECT
          </ReactRouterLink>
        </div>
      </div>
      <div className="content">
        <div className="scroll-container">
          <div className="photos">
            <div className="photo-container">
              <img
                src="../src/VideoPhotos/ferrari.jpg"
                alt="Video 5"
                className="normal-image"
              />
            </div>
            <div className="photo-container">
              <img
                src="../src/VideoPhotos/layla.jpg"
                alt="Photo 1"
                className="wide-image"
              />
            </div>
            <div className="photo-container">
              <img
                src="../src/VideoPhotos/PIC03491.jpg"
                alt="Video 2"
                className="normal-image"
              />
            </div>{" "}
            <div className="photo-container">
              <img
                src="../src/VideoPhotos/2lambo.jpg"
                alt="Video 6"
                className="normal-image"
              />
            </div>
            <div className="photo-container">
              <img
                src="../src/VideoPhotos/hyndai.png"
                alt="Video 3"
                className="normal-image"
              />
            </div>{" "}
            <div className="photo-container">
              <img
                src="../src/VideoPhotos/lambo1.jpg"
                alt="Video 7"
                className="normal-image"
              />
            </div>
            <div className="photo-container">
              <img
                src="../src/VideoPhotos/almir.jpg"
                alt="Video 4"
                className="normal-image"
              />
            </div>
          </div>
        </div>
        <div className="sticky-icons">
          <div className="icon-column">
            <a href="https://www.instagram.com/akzmedia92/">
              <FaInstagram className="your-instagram-link" />
            </a>
          </div>
          <div className="icon-column">
            <a href="https://www.linkedin.com/in/almir-k-a9226522b/">
              <FaLinkedin className="your-linkedin-link" />
            </a>
          </div>
          <div className="icon-column">
            <a href="https://www.youtube.com/channel/UCRvImYoJpk8PC1jX6bx-tfw">
              <FaYoutube className="your-youtube-link" />
            </a>
          </div>
        </div>
        <VerticalSlider />
      </div>{" "}
      <Connect />
    </div>
  );
};

export default Myvideo;
