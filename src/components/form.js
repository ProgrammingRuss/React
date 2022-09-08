import React, { useState } from "react";

export default function Form() {
  const [Name, setName] = useState("");
  const [Pass, setPass] = useState("");
  const [Email, setEmail] = useState("");
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changePass = (e) => {
    setPass(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const userInfo = {
    Name,
    Pass,
    Email,
  };
  const submitted = (e) => {
    e.preventDefault();
    console.log(userInfo);
  };
  return (
    <div>
      <form action="" className="form" onSubmit={submitted}>
        <h2>Input Form</h2>
        <div className="label">
          <label htmlFor="name">Enter Name</label>
          <br />
          <input
            type="text"
            id="name"
            required
            placeholder="Jhon Doe"
            onChange={changeName}
          />
        </div>

        <div className="password">
          <label htmlFor="password">Enter Password</label>
          <br />
          <input
            type="password"
            id="password"
            required
            placeholder="** ** ** **"
            onChange={changePass}
          />
        </div>

        <div className="email">
          <label htmlFor="email">Enter Email</label>
          <br />
          <input
            type="email"
            id="email"
            required
            placeholder="example@gmail.com"
            onChange={changeEmail}
          />
        </div>
        <div>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
