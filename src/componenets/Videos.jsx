import React from "react";
import YouTube from "react-youtube";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import "../style/Photos.css";

const Videos = () => {
  const videoData = [
    "aStXpOPvcvk",
    "1tIXx8AIbMo",
    "zkLSnw_9L9E",
    "knESPF4svFc",
    "oUPNQ2WGnGQ",
    "eeBbwtwEs40",
    "wmVz5MSYE7U",
    "w-SzPbAkWnw",
    "l6gX4hSSSx4",
    "e_AREjI2YLk",
    "HkW-GidRDm8",
    "m0v51Ypy43g",
  ];

  const renderVideos = videoData.map((videoId, index) => (
    <div className="video" key={index}>
      <YouTube
        videoId={videoId}
        opts={{ width: "135%", height: "130%", playerVars: { controls: 0 } }}
      />
    </div>
  ));

  return (
    <div className="videos-page">
      <h1 className="Myvideo-title">My videos</h1>
      <p className="info-about-video">
        When I'm behind the camera, I rely on my trusty Sony a7 III paired with
        a DJI Ronin S gimbal. I have a deep passion for creating dynamic,
        fast-paced cuts that capture the essence of the moment. Sometimes, I
        experiment with adding motion to objects while keeping the camera still,
        allowing my creativity to flow freely on set. All the magic happens in
        post-production, where I bring the footage to life using Adobe Premiere
        Pro, and occasionally, I add some final touches using CapCut.
      </p>
      <div className="videos-container">{renderVideos}</div>
      <div className="sticky-icons-videos">
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
    </div>
  );
};

export default Videos;
