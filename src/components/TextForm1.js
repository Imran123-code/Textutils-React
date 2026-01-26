import React, { useState } from "react";


export default function TextForm(props) {
  const handleUpClick = () => {
    let NewText = text.toUpperCase();
    setText(NewText);
    props.showAlert('converted to UpperCase','Success');
  };
  const handleLowClick = () => {
    let NewText = text.toLowerCase();
    setText(NewText);
    props.showAlert('converted to LowerCase','Success');

  };
  const handleclearwClick = () => {
    setText("");
    props.showAlert('Nothing left','Success');

  };
  const handlecopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('copied to clipboard','Success');

  };
  const handleOnchange = (event) => {
    // console.log("handleOncahge clicked");
    setText(event.target.value);
  };
  const handleRemveSpaces = () => {
    let NewText = text.replace(/\s+/g, " ").trim();
    setText(NewText);
    props.showAlert('spaces removed sucessfully','Success');

  };
  const handleReverseText = () => {
    let NewText = text.split("").reverse().join("");
    setText(NewText);
    props.showAlert('reversed text','Success');

  };

  const handleConvertTosentence = () => {
    let NewText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(NewText);
    props.showAlert('converted to sentence','Success');
    
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            {props.title}
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            style={{backgroundColor : props.mode ==='light'?'white': 'gray'}}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
          <button className="btn btn-primary mt-4 mx-2" onClick={handleUpClick}>
            Convert to uppercase
          </button>
          <button className="btn btn-primary mt-4 " onClick={handleLowClick}>
            Convert to lowercase
          </button>
          <button
            className="btn btn-primary mt-4  mx-2"
            onClick={handleclearwClick}
          >
            Clear text
          </button>
          <button
            className="btn btn-primary mt-4  mx-2"
            onClick={handlecopyClick}
          >
            Copy Text
          </button>
          <button
            className="btn btn-primary mt-4  mx-2"
            onClick={handleRemveSpaces}
          >
            Removes extra spaces
          </button>
          <button
            className="btn btn-primary mt-4  mx-2"
            onClick={handleReverseText}
          >
            Reverse Text
          </button>
          <button
            className="btn btn-primary mt-4  mx-2"
            onClick={handleConvertTosentence}
          >
            Convert to sentance
          </button>
        </div>
      </div>
      <div className="container">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} sentence and {text.length} character.
        </p>
        <p>{0.008 * text.split(" ").length} mintes to read</p>
        <h1>Preview</h1>
        <p>{text.length > 0? text:"enter something to preview it here."}</p>
      </div>
    </>
  );
}
