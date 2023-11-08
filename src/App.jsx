import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "./style/Myvideo.css";
import Mywebdev from "../src/componenets/Mywebdev";
import Myvideo from "./componenets/Myvideo";
import Videos from "./componenets/Videos";
import Photo from "./componenets/Photos"; // Import the Photo component

function App() {
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/mywebdev" element={<Mywebdev />} />
        <Route path="/myvideo" element={<Myvideo />} />
        <Route path="/Videos" element={<Videos />} />
        <Route
          path="/photo"
          element={<Photo />} // Add the Photo component here
        />

        <Route
          path="/"
          element={
            <div
              className={`container ${hoverLeft ? "hover-left" : ""} ${
                hoverRight ? "hover-right" : ""
              }`}
            >
              <div
                className="split left"
                onMouseEnter={() => setHoverLeft(true)}
                onMouseLeave={() => setHoverLeft(false)}
              >
                <h1 className="h1-left">My Webdev projects</h1>
                <Link
                  to="/mywebdev"
                  className={`btn-right ${hoverLeft ? "btn-visible" : ""}`}
                >
                  💻Click me
                </Link>
              </div>
              <div
                className="split right"
                onMouseEnter={() => setHoverRight(true)}
                onMouseLeave={() => setHoverRight(false)}
              >
                <h1 className="h1-right">My Videography Projects</h1>
                <Link
                  to="/myvideo"
                  className={`btn-left ${hoverRight ? "btn-visible" : ""}`}
                >
                  Click me🎥
                </Link>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
