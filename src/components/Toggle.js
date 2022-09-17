import React, { useState } from "react";
import style from "./Toggle.module.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

function Toggle({ id, title, desc, li }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={style.toggles}>
      <div className={style.toggle}>
        <h2 className={style.title}>
          {" "}
          <span
            onClick={() => {
              alert(id);
            }}
            className={style.li}
          >
            {li + 1}
          </span>
          {title}
        </h2>

        <div>
          <button onClick={() => setToggle(!toggle)} className={style.btn}>
            {toggle ? <AiOutlineArrowDown /> : <AiOutlineArrowRight />}
          </button>
        </div>
      </div>
      {toggle && <p className={style.p}>{desc}</p>}
    </div>
  );
}

export default Toggle;
