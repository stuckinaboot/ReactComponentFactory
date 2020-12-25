import "./App.css";
import ColorButton from "./components/MuiColorButton";

function App() {
  return (
    <div className="App">
      <ColorButton
        label={"Woohoo!"}
        textColor={"white"}
        backgroundColor={"red"}
      />
    </div>
  );
}

export default App;
