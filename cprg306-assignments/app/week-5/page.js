// page.js

import React from "react";
import ItemList from "./item-list";

const Page = () => {
  return (
    <div className="bg-blue-200 min-h-screen">
      {/*/ background changes yet to be made*/}
      <div className="container mx-auto  ">
        <h1 className="text-4xl font-bold mb-4 border-b-3 border-gray-500">
          Shopping List
        </h1>
        <ItemList />
      </div>
    </div>
  );
};

export default Page;
