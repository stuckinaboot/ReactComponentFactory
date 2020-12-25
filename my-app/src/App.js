import logo from "./logo.svg";
import "./App.css";
import ColorButton from "./components";

function App() {
  return (
    <div className="App">
      <ColorButton
        label={"Foobar"}
        textColor={"white"}
        backgroundColor={"blue"}
      />
    </div>
  );
}

export default App;
