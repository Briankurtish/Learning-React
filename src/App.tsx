// import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  // let items = ["New York", "San Fransico", "Tokyo", "London", "Paris"];

  // const handleSelectedItem = (item: string) => {
  //   alert(item);
  // };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello <b>World</b>
        </Alert>
      )}
      <Button
        onClick={() => setAlertVisibility(true)}
        title={"Click Me"}
      ></Button>

      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      /> */}
    </div>
  );
}

export default App;
