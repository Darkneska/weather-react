
import React from "react";
import './App.css';
import Search from "./Search";


export default function App(){
  return (
    <div className="App">
      <div className="container">
        <Search  defaultCity="New York" />
        <footer><a
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
      </a></footer>
      </div>
    </div>
  );
}