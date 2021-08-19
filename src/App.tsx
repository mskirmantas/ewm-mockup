import React from "react";
import "./App.css";

function App() {
  const currentURL = window.location.href;
  const dmToolURL = "https://not-dm.netlify.app/";

  let clientID = "Abc123d";
  let accountNo = 123469;

  const linkToDM =
    dmToolURL +
    "?LINK=" +
    currentURL +
    "&CLIENT_ID=" +
    clientID +
    "&ACCOUNT_NO=" +
    accountNo;

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
            <a href={linkToDM}>
              Update Addresses - <i>NEW!</i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
