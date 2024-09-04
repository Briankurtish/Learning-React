// import ListGroup from "./components/ListGroup";

import Alert from "./components/Alert";

function App() {
  // let items = ["New York", "San Fransico", "Tokyo", "London", "Paris"];

  // const handleSelectedItem = (item: string) => {
  //   alert(item);
  // };

  return (
    <div>
      <Alert>
        Hello <b>World</b>
      </Alert>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      /> */}
    </div>
  );
}

export default App;
