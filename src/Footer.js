import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <small className="link">
      <a
        href="https://github.com/Jolusegun/simple-weather-react"
        target="_blank"
        rel="noreferrer"
        className="source"
      >
        Open-sourced on GitHub
      </a>{" "}
      by Denisa Pavlik{" "}
      <a
        href="https://heuristic-hugle-66f126.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="source"
      >
        hosted on Netlify
      </a>
    </small>
  );
}