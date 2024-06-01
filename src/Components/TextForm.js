import React from "react";
import { useState } from "react";
import { toCamelCase } from "./Utils";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpChange = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };
  const handleLoChange = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };
  const handleCaChange = () => {
    const firstchar = text[0];
    const rest = text.slice(1);
    const newText = toCamelCase(rest);
    setText(firstchar.toUpperCase() + newText);
    props.showAlert("Converted to Camelcase!", "success");
  };
  const handleClear = () => {
    setText("");
    props.showAlert("Text cleared!", "success");
  };
  const handleExtraSpace = () => {
    const newText = text.split(/( )+/);
    setText(newText.join(""));
    props.showAlert("Extra spaces removed!", "success");
  };
  const numOfWords = text === "" ? 0 : text.split(" ").length;

  return (
    <>
      <div
        className={`container my-3 bg-${props.mode} text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3 my-4">
          <textarea
            className={`form-control container my-3 bg-${props.mode} text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
          ></textarea>
          <button
            className="btn my-3 mx-2"
            style={props.myStyle}
            onClick={handleUpChange}
          >
            Convert to UpperCase
          </button>
          <button
            className="btn my-3 mx-2" 
            style={props.myStyle}
            onClick={handleLoChange}
          >
            Convert to Lowercase
          </button>
          <button
            className="btn my-3 mx-2"
            style={props.myStyle}
            onClick={handleCaChange}
          >
            Convert to Camelcase
          </button>
          <button 
            className="btn my-3 mx-2" 
            style={props.myStyle}
            onClick={handleClear}>
            Clear
          </button>
          <button
            className="btn my-3 mx-2"
            style={props.myStyle}
            onClick={handleExtraSpace}
          >
            Remove Extra Space
          </button>
        </div>
      </div>
      <div
        className={`container my-3 bg-${props.mode} text-${
          props.mode === "light"? "dark" : "light"
        }`}
      >
        <h1>Your Text Summary</h1>
        <p>
          {numOfWords} words and {text.length} characters
        </p>
        <p>{0.008 * numOfWords} Minutes required to read</p>
      </div>
    </>
  );
}
