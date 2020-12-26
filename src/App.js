import "./App.css";
import ColorButton from "./components/MuiColorButton";
import RawCard from "mui-raw-card";
import TitledCard from "mui-titled-card";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Grid container style={{ margin: 20 }}>
        <Grid item xs={4}>
          <RawCard title="n">
            <ColorButton
              label={"Woohoo!"}
              textColor={"white"}
              backgroundColor={"red"}
            />
          </RawCard>
        </Grid>
        <Grid item xs={4}>
          <TitledCard titleBackgroundColor={"red"} title="foo" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
