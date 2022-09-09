import React from "react";
// for css
import profile from "../Scss/profileCard.scss";
// for Data
import Data from "./data.json";
// for icon
import { AiFillYoutube } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export default function profileCard(props) {
  console.log(props);
  const { image, name, age, mobile, index } = props;
  return (
    <div className="card">
      <header>
        <img src={image} />
      </header>
      <hr />
      <span className="index">{index}</span>
      <main>
        <div className="name">
          Name:<span>{name}</span>
        </div>
        <div className="age">
          Age:<span>{age}</span>
        </div>
        <div className="mobile">
          Mobile: <span>{mobile}</span>
        </div>
      </main>
      <footer>
        <BsFacebook className="facebook" />
        <AiFillYoutube className="youtube" />
        <BsInstagram className="instra" />
      </footer>
    </div>
  );
}
