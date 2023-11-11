import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../style/Myvideo.css";
import rs7 from "/VideoPhotos/rs7.jpg";
import Hyndai from "/VideoPhotos/Hyndai.png";
import Merca from "/VideoPhotos/Mercedes.jpg";
import lambo from "/VideoPhotos/2lambo.jpg";
import sony from "../assets/sony.png";
import ronin from "../assets/ronin.png";

const videoProjects = [
  {
    title: "Auto Trada",
    image: rs7,
  },
  {
    title: "Fribrocks Bil",
    image: Hyndai,
  },
  {
    title: "Auto Trada",
    image: Merca,
  },
  {
    title: "Platinum Cars",
    image: lambo,
  },
  {
    title: "Sony a7 iii with a Zeiss 1.3/35mm ",
    image: sony,
  },
  {
    title: " DJI Ronin S ",
    image: ronin,
  },
];

const VerticalSlider = () => {
  return (
    <div>
      <h1 className="title-img">Scroll to see my Projects</h1>
      <div className="right fade-in">
        <Link to="/photo">
          {" "}
          {/* Link to "photo" page */}
          <img
            className="right-img"
            src={videoProjects[1].image}
            alt={videoProjects[1].title}
          />
        </Link>
        <h1 className="Title-right">
          Fribrocks Bil <p>2023</p>
        </h1>
      </div>
      <div className="left fade-in">
        <Link to="/photo">
          {" "}
          {/* Link to "photo" page */}
          <img
            className="left-img"
            src={videoProjects[0].image}
            alt={videoProjects[0].title}
          />
        </Link>
        <h1 className="Title-left">
          Auto trada <p>2023</p>
        </h1>
      </div>
      <div className="right fade-in">
        {" "}
        <Link to="/photo">
          {" "}
          {/* Link to "photo" page */}
          <img
            className="right-img"
            src={videoProjects[3].image}
            alt={videoProjects[3].title}
          />
        </Link>
        <h1 className="Title-right">
          Platinum Cars <p>2023</p>
        </h1>
      </div>
      <div className="left fade-in">
        <Link to="/photo">
          {" "}
          {/* Link to "photo" page */}
          <img
            className="left-img"
            src={videoProjects[2].image}
            alt={videoProjects[2].title}
          />
        </Link>
        <h1 className="Title-left">
          Auto trada <p>2023</p>
        </h1>
      </div>
      <div className="Camera-title">My Gear</div>
      <div className="gear">
        <div className="stab-sony"></div>
        <img
          className="camera-img"
          src={videoProjects[4].image}
          alt={videoProjects[4].title}
        />
        <p className="sony-info">
          I put my trust in a Sony a7 III paired with a Zeiss 35mm f/1.4 lens.
          This dynamic duo has been my constant companion for nearly everything
          I create. With its versatile capabilities, my Sony a7 III has
          faithfully captured the essence of countless moments over the years.
          Its performance has consistently met and even exceeded my
          expectations, making it an invaluable tool in my creative journey.
        </p>
        <img
          className="camera-ronin"
          src={videoProjects[5].image}
          alt={videoProjects[4].title}
        />
        <p className="ronin-s-text">
          I enhance my videography with the DJI Ronin-S gimbal, a versatile tool
          that helps me achieve smooth and professional-looking shots. Whether
          I'm capturing dynamic car scenes or adding motion to objects while
          keeping the camera steady, the Ronin-S offers stability and creative
          freedom. Its intuitive design and features are essential for my
          videography work.
        </p>
        <div className="gear">
          <div
            className="gear-item"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <br />
            <img
              style={{ height: "150px" }}
              className="icons-canva"
              src="./VideoPhotos/canva.png"
              alt="Photoshop"
            />
            <img
              style={{ height: "130px" }}
              className="icons-photoshop"
              src="./VideoPhotos/photoshop.png"
              alt="Photoshop"
            />{" "}
            <img
              style={{ height: "130px" }}
              className="icons-lightroom"
              src="./VideoPhotos/lightroom.png"
              alt="Lightroom"
            />{" "}
            <img
              style={{ height: "150px" }}
              className="icons-capcut"
              src="./VideoPhotos/capcut.png"
              alt="CapCut"
            />{" "}
            <img
              style={{ height: "150px" }}
              className="icon-adobe"
              src="./VideoPhotos/premierpro.png"
              alt="phosotos"
            />
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default VerticalSlider;
