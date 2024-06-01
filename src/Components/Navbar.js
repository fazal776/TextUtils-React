import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className={`navbar-brand text-${(props.mode === "light")? "dark" : "light"}`} to={"/"}>
          TextUtils
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" key="/">
              <Link className={`nav-link active text-${(props.mode === "light")? "dark" : "light"}`} aria-current="page" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item" key="/about">
              <Link className={`nav-link text-${(props.mode === "light")? "dark" : "light"}`} to={"/about"}>
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="dropstart">
        <button
          className="btn btn-secondary dropdown-toggle mx-2"
          style={props.myStyle}
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Themes
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" onClick={(event)=>{props.toggleMode('light', event)}} href="/">
              Light
            </a>
          </li>
          <li>
            <a className="dropdown-item" onClick={(event)=>{props.toggleMode('dark', event)}} href="/">
              Dark
            </a>
          </li>
          <li>
            <a className="dropdown-item" onClick={(event)=>{props.toggleMode('green', event)}} href="/">
              Green
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
