import { useState } from "react";

// { items: [], heading: string }
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //   Hook -- it is a function that allows us to tap into built in features in react
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    return items.length === 0 ? <p>No Items found</p> : null;
  };

  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>No Items found</p> : null} */}
      {items.length === 0 && <p>No Items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
