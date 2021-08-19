import React from "react";
import "./App.css";

function App() {
  const currentURL = window.location.href;
  const dmToolURL = "https://dm-prototype.netlify.app/";

  return (
    <div className="App">
      <h3>This is fake eWealthManager</h3>
      <div className="link-block">
        <ul>
          <li>
            <a href="/">Link 1</a>
          </li>
          <li>
            <a href="/">Link 2</a>
          </li>
          <li>
            <a href="/">Link 3</a>
          </li>
          <li>
            <a href={dmToolURL + "?LINK=" + currentURL}>
              Update Addresses - <i>NEW!</i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
