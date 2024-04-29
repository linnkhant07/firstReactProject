import ListGroup from "./components/ListGroup";
import Alert from "./Alert";
import Button from "./Button";
import { useState } from "react";

function App() {
  let str = "Now the day bleeds...";

  const buttonClicked = () => {
    console.log("lately ive been ive been thinking");
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      {alertVisible && (
        <Alert
          onClose={() => {
            setAlertVisibility(false);
          }}
        >
          Hello World!
        </Alert>
      )}
      <Button
        text={"Click Me!"}
        color="primary"
        onClick={() => {
          setAlertVisibility(true);
        }}
      ></Button>
    </>
  );
}

/*

function App() {
  let items = ["Norway", "Switzerland", "Germany", "London"];

  const handleSelectedItem = (item: string) => {
    alert(`Welcome to ${item}`);
  };

  return (
    <>
      <ListGroup
        items={items}
        header="Countries"
        onSelectItem={handleSelectedItem}
      ></ListGroup>
      <ListGroup
        items={items}
        header="Countries"
        onSelectItem={handleSelectedItem}
      ></ListGroup>
    </>
  );
}*/

export default App;
