import { MouseEvent, useState } from "react";

interface Props {
  items: string[];
  header: string;
  //Typescript function
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, header, onSelectItem }: Props) {
  const handleClick = (event: MouseEvent) => {
    console.group(event);
  };

  const message = items.length === 0 && <p>No item found</p>;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{header}</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-tem"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
