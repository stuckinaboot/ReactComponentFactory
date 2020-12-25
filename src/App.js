import "./App.css";
import ColorButton from "./components/colorButton";
import CB from "mui-color-button";

function App() {
  return (
    <div className="App">
      <CB label={"fudge"} backgroundColor={"blue"} textColor={"white"} />
    </div>
  );
}

export default App;
