import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import logo from "../logo.svg";
const Counter = () => {
  const [count, setcount] = useState(0);

  const decrease = () => {
    setcount(count + 1);
  };
  const increase = () => {
    setcount(count - 1);
  };
  const vsariant = "primary";
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <div className="counter">{count}</div>
        {/* <Card.Img src={logo} /> */}
        <Card.Body>
          <div>
            <Card.Title className="centerr">React</Card.Title>
          </div>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="flex">
            <Button
              onClick={increase}
              variant={vsariant}

            >
              Minus
            </Button>
            <Button
              onClick={decrease}
              variant={vsariant}
            
            >
              Plus
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Counter;
