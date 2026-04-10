import React, { useState } from "react";

export default function About() {
  const [MyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });
  return (
    <div className="container" style={MyStyle} id="aboutcon">
      <h1>About us</h1>
      <p>
        Textutils is a simple and user-friendly web application designed to help
        users analyze and manipulate text efficiently. It allows you to perform
        common text operations such as converting text to uppercase or
        lowercase, removing extra spaces, counting words and characters, and
        formatting text for better readability. The app is built using React,
        making it fast and responsive, and it provides a clean interface where
        users can enter text and instantly see results. Textutils is especially
        useful for students, developers, and content creators who want quick
        text transformations without using heavy software. Overall, Textutils
        focuses on speed, simplicity, and productivity, helping users work
        smarter with text. ✨
      </p>
      <div className="accordion" id="accordionExample" style={MyStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={MyStyle}
            >
              About Textutils
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={MyStyle}>
              Textutils is a lightweight React-based application that helps
              users analyze and modify text easily. It provides features like
              text transformation, word and character count, and space removal
              to improve productivity.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={MyStyle}
            >
              Free & Fast
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={MyStyle}>
              Textutils runs entirely in the browser, ensuring fast performance
              and complete privacy. No data is stored or shared, making it safe
              to use for everyone.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={MyStyle}
            >
              Easy to Use
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={MyStyle}>
              With a simple and intuitive interface, Textutils is suitable for
              students, developers, and writers who want quick text operations
              without complexity.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
