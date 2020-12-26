import "./App.css";
import ColorButton from "./components/MuiColorButton";
import RawCard from "mui-raw-card";

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
    </div>
  );
}

export default App;
