const Item = ({ name, quantity, category }) => {
  return (
    <ul className="border border-3 p-2 m-5 bg-yellow-200 text-black">
      <li className="text-4xl font-semibold">Name: {name}</li>
      <li>
        buy {quantity} in the {category} category
      </li>
    </ul>
  );
};

export default Item;
