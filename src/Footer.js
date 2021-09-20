import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <small className="link">
      <a
        href="https://github.com/Darkneska/weather-react"
        target="_blank"
        rel="noreferrer"
        className="source"
      >
        Open-sourced on GitHub
      </a>{" "}
      by Denisa Pavlikova{" "}
      <a
        href="https://confident-kalam-ccc5df.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="source"
      >
        hosted on Netlify
      </a>
    </small>
  );
}