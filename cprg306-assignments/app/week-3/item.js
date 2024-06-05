// Item.js

import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <ul className="border-3 p-2 m-5 bg-yellow-200 text-black">
      <li className="text-3xl font-bold">Name: {name}</li>
      <li className="text-sm ">
        Buy {quantity} in {category}
      </li>
      {/* {console.log("Hello World")} */}
    </ul>
  );
};

export default Item;
