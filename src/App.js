import "./App.css";
import ColorButton from "./components/MuiColorButton";
import RawCard from "mui-raw-card";
import TitledCard from "mui-titled-card";
import { Grid } from "@material-ui/core";
import SimpleDialog from "mui-simple-dialog";
import { showAlert } from "./components/ShowAlert";

function App() {
  return (
    <div className="App">
      <Grid container style={{ margin: 20 }}>
        <Grid item xs={4}>
          <RawCard title="n">
            <SimpleDialog
              title="Testing"
              description={
                <>
                  <ColorButton
                    label={"Alert!"}
                    textColor={"white"}
                    backgroundColor={"red"}
                    onClick={() => showAlert("woah")}
                  />
                </>
              }
            >
              <ColorButton
                label={"Woohoo!"}
                textColor={"white"}
                backgroundColor={"red"}
              />
            </SimpleDialog>
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
