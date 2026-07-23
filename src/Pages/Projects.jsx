import { useState } from "react";
import ChatApp from "../assets/whatshapp.png";
import netflix from "../assets/netflix.png";
import "../Pages/Projects.scss";

export default function Projects() {
  const projects = [
    {
      id: 1,
      className: "box1",
      title: "Real-Time WhatsApp Clone",
      image: ChatApp,
      description:
        "A fully responsive, production-ready real-time communication platform built to emulate the core experience of WhatsApp. The application features a passwordless authentication flow utilizing dynamic OTP verifications and interactive phone onboarding. Engineered with a mobile-first architecture, it ensures seamless messaging interfaces, dark mode aesthetics, and immediate contact syncing across both desktop monitors and small mobile screens.",
      live: "https://chat-app-rho-eight-58.vercel.app/",
      github: "https://github.com/parmarjanak9714/Chat-App",
    },
    {
      id: 2,
      className: "box2",
      title: "Netflix Clone",
      image: netflix,
      description:
        "A high-performance, full-stack video streaming platform clone inspired by Netflix. This application replicates the real Netflix user experience, allowing users to browse trending content, filter movies by genre, view detailed descriptions, and watch movie trailers instantly. Built using the MERN stack, the application dynamically fetches and renders real-time data to provide a seamless entertainment experience across all devices.",
      live: "https://netflix-mern-clone-two.vercel.app/",
      github: "https://github.com/parmarjanak9714/netflix-mern-clone",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-heading">
        <h2>
          My <span>Projects</span>
        </h2>
      </div>

      <div className="project-slider-box">
        <div
          className="slider"
          style={{transform: `translateX(-${currentIndex * 100}%)`,}}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className={`box ${project.className}`}
            >
              <div className="bg"></div>

              <div className="details">
                <div className="content">
                  <h1>{project.title}</h1>

                  <p>{project.description}</p>

                  <div className="btn-group">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="live-btn">
                        Live Demo
                      </button>
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="github-btn">
                        GitHub
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="illustration">
                <div className="inner">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="arrow prev"
          onClick={prevSlide}
          aria-label="Previous"
        >
          <svg
            width="56.898"
            height="91"
            viewBox="0 0 56.898 91"
          >
            <path
              d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z"
              transform="translate(0 91) rotate(-90)"
              fill="#ffffff"
            />
          </svg>
        </button>

        <button
          className="arrow next"
          onClick={nextSlide}
          aria-label="Next"
        >
          <svg
            width="56.898"
            height="91"
            viewBox="0 0 56.898 91"
          >
            <path
              d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z"
              transform="translate(56.898) rotate(90)"
              fill="#ffffff"
            />
          </svg>
        </button>

        <div className="trail">
          {projects.map((item, index) => (
            <div
              key={item.id}
              className={`trail-item ${
                currentIndex === index ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              {String(index + 1).padStart(2, "0")}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}