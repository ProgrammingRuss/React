import React from "react";
// for Css
import Card from "react-bootstrap/Card";
import slide from "../Scss/slide.scss";

export default function Slide() {
  return (
    <div className="slide">
      <div className="title">This is title</div>
      <div className="body">
        <div className="text">Lorem ipsum dolor sit amet </div>
        <div className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, quam
          quisquam perferendis harum quis maxime? Non sint eos laborum
          obcaecati.
        </div>
        <button>Click</button>
      </div>
    </div>
  );
}
