import React from "react";
import "./Intro.css";
import "./Modal.css";

const showModal = (e) => {
  e.preventDefault();
  let modalShow = document.getElementById("modal");
  modalShow.style.display = "flex";
};

function Intro(props) {
  return (
    <div className="intro">
      <div className="container">
        <div className="intro__inner">
          <h1 className="intro__title main-title">
            Strength in equality.The power of dreams
          </h1>

          <h3 className="intro__subtitle">
            Web hosting for $9.95/mo $2.95/mo. Sign up today and also get a free
          </h3>
          <h3 className="intro__subtitle">
            1-on-1 consultation to help you get started.
          </h3>

          <button className="btn btn--red" onClick={showModal}>
            get started
          </button>

          <div className="intro__link">
            <a href="/">learn more</a>
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
}

export default Intro;
