import React from "react";
import { useState } from "react";

const ErrorExample = () => {
  const [title, setTitle] = useState("random title");

  const handleClick = () => {
    if (title === "random title") {
      setTitle("certainly");
    } else {
      setTitle("random title");
    }
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className="btn" onClick={handleClick}>
        Change
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
