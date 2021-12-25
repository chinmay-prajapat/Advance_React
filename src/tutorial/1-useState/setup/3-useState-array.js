import React from "react";
import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    setPeople(people.filter((item) => item.id !== id));
  };
  return (
    <div>
      <h2>
        {people.map((item) => {
          const { id, name } = item;
          return (
            <div key={id} className="item">
              {name}
              <button onClick={() => removeItem(id)}>Remove</button>
            </div>
          );
        })}
      </h2>
      <button className="btn" onClick={() => setPeople([])}>
        Clear items
      </button>
    </div>
  );
};

export default UseStateArray;
