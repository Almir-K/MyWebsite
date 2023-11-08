import React, { useState } from "react";
import Modal from "react-modal";
import "../style/Photos.css";

Modal.setAppElement("#root"); // Set the root element for the modal

const Photo = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = image => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const imageData = [
    "../src/VideoPhotos/2lambo.jpg",
    "../src/VideoPhotos/ferrari.jpg",
    "../src/VideoPhotos/Hyndai.png",
    "../src/VideoPhotos/lambo.jpg",
    "../src/VideoPhotos/lambo2.jpg",
    "../src/VideoPhotos/mclaren.jpg",
    "../src/VideoPhotos/porshe.jpg",
    "../src/VideoPhotos/rs7.jpg",
    "../src/VideoPhotos/Mercedes.jpg",

    "../src/VideoPhotos/lambo1.jpg",
  ];

  const renderImages = imageData.map((image, index) => (
    <div className="photo" key={index}>
      <img
        src={image}
        alt={`Photo ${index + 1}`}
        onClick={() => openModal(image)}
      />
    </div>
  ));

  const weddingImages = [
    "../src/VideoPhotos/PIC04479.jpg",
    "../src/VideoPhotos/PIC03722.jpg",
    "../src/VideoPhotos/PIC03491.jpg",
    "../src/VideoPhotos/PIC03101.jpg",
    "../src/VideoPhotos/PIC04605.jpg",
    "../src/VideoPhotos/PIC05418.jpg",
    "../src/VideoPhotos/PIC05386.jpg",
    "../src/VideoPhotos/PIC05261.jpg",
    "../src/VideoPhotos/PIC05297.jpg",
    "../src/VideoPhotos/PIC05326.jpg",
    "../src/VideoPhotos/DSC00490.jpg",
    "../src/VideoPhotos/DSC00769.jpg",
    "../src/VideoPhotos/DSC02371.jpg",
    "../src/VideoPhotos/DSC02377.jpg",
    "../src/VideoPhotos/PIC05195.jpg",
  ];

  const renderWeddingImages = weddingImages.map((image, index) => (
    <div className="photo" key={index}>
      <img
        src={image}
        alt={`Photo ${index + 1}`}
        onClick={() => openModal(image)}
      />
    </div>
  ));

  return (
    <div className="Photos-cont">
      <h1 style={{ color: "white" }}></h1>
      <div>
        <h1
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Cormorant SC",
            marginBottom: "40px",
          }}
        >
          My Photos
        </h1>
        <p className="info-about-photos">
          I like to work with cars, that's a dream I had since I was a kid. My
          style of photographing is a little out of the normal. I like to add
          some noise to my pictures, as I feel it gives them a little more life
          and requires a bit more effort for the viewer to concentrate and see
          all the details.
        </p>

        <div className="photo-photo">{renderImages}</div>
        <div className="other-content" style={{ fontFamily: "Cormorant SC" }}>
          Weddings, Company Portraits & Birthdays
        </div>
        <div className="wedding-photo">{renderWeddingImages}</div>
      </div>

      <Modal
        isOpen={selectedImage !== null}
        onRequestClose={closeModal}
        contentLabel="Enlarged Image"
        className="modal"
        overlayClassName="overlay"
      >
        {selectedImage && <img src={selectedImage} alt="Enlarged Image" />}
        <button onClick={closeModal} className="close-button">
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Photo;
