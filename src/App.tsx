import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Fransico", "Tokyo", "London", "Paris"];

  const handleSelectedItem = (item: string) => {
    alert(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
