import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Movies from "./Movies";

function App() {
  return (
    <div className="App">
      <h1>Movies Evan Likes!</h1>
      <p>
        Below is a (not) comprehensive list of movies that Evan really likes.
      </p>
      <Movies />
    </div>
  );
}

export default App;
