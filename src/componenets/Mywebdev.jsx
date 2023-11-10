import React, { useRef, useState } from "react";

import "../style/Mywebdev.css";
import scrollimg from "../assets/scroll.png";
import dadjokes from "../assets/dadjokes.png";
import progress from "../assets/progress.png";
import motiv from "../assets/moti.png";
import form from "../assets/form.png";
import hidden from "../assets/hidden.png";
import Git from "../assets/github.svg";
import insta from "../assets/instagram.svg";
import linked from "../assets/linkedin.svg";
import CV from "../assets/Almir-cv.pdf";
import pic from "../assets/coding.jpg";
import cards from "../assets/cards.png";
import blur from "../assets/blur.png";
import AnimatedNav from "../assets/animatednav.png";
import slider from "../assets/Slider.png";
import Movie from "../assets/movieapp.png";
import clock from "../assets/clock.png";
import input from "../assets/input.png";
import keycode from "../assets/keycode.png";
import ContactMe from "./ContactMe";
import DarkModeToggle from "./DarkModeToggle";

const projects = [
  {
    title: "The Flag Project",
    link: "https://lucent-naiad-b4d4be.netlify.app/",
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/v1554826345/Challenges/yhq5ihanseyinzwblaw1.jpg",
  },
  {
    title: "Spotify Clone",
    link: "https://myspotifyproject.netlify.app/",
    image:
      "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Motivation App",
    link: "https://loquacious-cheesecake-1a0788.netlify.app/",
    image: motiv,
  },
  {
    title: " Dad Jokes",
    link: "https://visionary-toffee-3b3734.netlify.app",
    image: dadjokes,
  },
  {
    title: "Movie App",
    link: "https://stupendous-gnome-774b8a.netlify.app/",
    image: Movie,
  },
  {
    title: " Scroll Animation",
    link: "https://tranquil-truffle-623499.netlify.app/",
    image: scrollimg,
  },
  {
    title: "Clock",
    link: "https://comforting-biscuit-db35dc.netlify.app/",
    image: clock,
  },
  {
    title: "Form Input",
    link: "https://charming-wisp-11d506.netlify.app/",
    image: input,
  },
  {
    title: "KeyCodes",
    link: "https://preeminent-boba-922c6d.netlify.app/",
    image: keycode,
  },

  {
    title: "Progress bar",
    link: "https://strong-sunshine-fba922.netlify.app/",
    image: progress,
  },

  {
    title: "Form input",
    link: "https://resonant-froyo-fbcdf3.netlify.app/",
    image: form,
  },

  {
    title: "Hidden search",
    link: "https://courageous-blancmange-01e1d0.netlify.app/",
    image: hidden,
  },
  {
    title: "Expanding Cards",
    link: "https://silver-meerkat-19cd83.netlify.app/",
    image: cards,
  },
  {
    title: "Loading Blur",
    link: "https://monumental-khapse-a1b033.netlify.app/",
    image: blur,
  },
  {
    title: "Animated Nav",
    link: "https://classy-queijadas-5d6c3f.netlify.app/",
    image: AnimatedNav,
  },
  {
    title: "Background Slider",
    link: "https://serene-cuchufli-ad6f44.netlify.app/",
    image: slider,
  },
];

const AboutMeSection = () => (
  <div>
    <h1 className="Hi">👋 Hi there!</h1>
    <div className="about-me">
      <h2>About Me</h2>
      <p>
        I'm Almir, and I've undergone quite the transformation. Formerly, I
        spent 11 years as a truck driver and team leader. But, a year ago, I
        made a bold decision to change my career path and transition into the
        world of web development, and I've never looked back. <br />
        🚀 I embarked on this exciting journey by joining a coding bootcamp, and
        I've rapidly evolved into a versatile Full Stack Developer. <br />{" "}
        <br />
        💻 My toolset includes HTML, CSS, JavaScript, React, Node.js,
        Material-UI, and APIs. I'm equally at ease with frontend and backend
        technologies. 🔥 I'm driven, hardworking, and committed to my goals.
        Once I set my mind on something, there's no turning back—I make it
        happen! Giving up is simply not in my vocabulary. 😊 <br />
        <br />
        👥 In addition to my coding skills, I've honed my leadership abilities.
        I take immense pleasure in helping others excel, promoting growth within
        the team, and contributing to the company's success. 📚 There's so much
        more to my story, but let's save the rest for our future conversation.
        I'm looking forward to connecting with you! 👋
      </p>
    </div>
    <div className="pic-container">
      <img className="pic" src={pic} />
    </div>
    <div className="chips-container">
      <div className="chip html">HTML</div>
      <div className="chip css">CSS</div>
      <div className="chip js">JavaScript</div>
      <div className="chip react">React</div>
      <div className="chip node">Node.js</div>
      <div className="chip api">APIs</div>
      <div className="chip material-ui">MaterialUI</div>
    </div>
  </div>
);

const Navbar = () => (
  <nav className="navbar">
    <ul className="navbar-list">
      <li className="navbar-item">
        <a
          href={CV}
          download="your-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          Download my CV
        </a>
      </li>
    </ul>
  </nav>
);

const Mywebdev = () => {
  const projectsRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false); // Initialize dark mode state

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Toggle dark mode state
  };

  return (
    <div
      className={`dark-mode-container ${darkMode ? "dark-mode" : "light-mode"}`}
    >
      <Navbar />
      <AboutMeSection /> {/* Moved below the Navbar */}
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <h1 className="My-projects">My projects</h1>
      <div className="projects-grid" id="projects" ref={projectsRef}>
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="project-box"
            style={{ backgroundImage: `url(${project.image})` }}
            data-title={project.title}
          >
            <div className="project-title">{project.title}</div>
          </a>
        ))}
      </div>
      <div className="social-media-bar">
        <br />
        <a
          className="social-link social-link1"
          href="https://www.instagram.com/akzmedia92/"
        >
          <img src={insta} alt="Instagram" />
        </a>
        <br />
        <br />

        <a
          className="social-link social-link4"
          href="https://github.com/Almir-K"
        >
          <img src={Git} alt="Github" />
        </a>
        <br />
        <br />

        <a
          className="social-link social-link4"
          href="https://www.linkedin.com/in/almir-k-a9226522b/"
        >
          <img src={linked} alt="Linkedin" />
        </a>
      </div>
      <br />
      <br />
      <ContactMe />
    </div>
  );
};

export default Mywebdev;
