import "./App.css";
import ColorButton from "./components/MuiColorButton";
import RawCard from "mui-raw-card";
import TitledCard from "./components/TitledCard";

function App() {
  return (
    <div className="App">
      <RawCard title="n">
        <ColorButton
          label={"Woohoo!"}
          textColor={"white"}
          backgroundColor={"red"}
        />
      </RawCard>
      <TitledCard titleBackgroundColor={"red"} title="foo" />
    </div>
  );
}

export default App;
