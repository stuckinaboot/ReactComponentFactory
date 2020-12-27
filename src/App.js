import "./App.css";
import ColorButton from "./components/MuiColorButton";
import RawCard from "mui-raw-card";
import TitledCard from "mui-titled-card";
import { Grid } from "@material-ui/core";
import SimpleDialog from "mui-simple-dialog";
import CopyableText from "./components/CopyableText";
import SuggestableChipInput from "./components/SuggestableChipInput";
import DropdownMenu from "./components/DropdownMenu";
import { showAlert, AlertLocation } from "show-alert";
import { Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

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
                    onClick={() =>
                      showAlert("woah", {
                        location: AlertLocation.TOP_RIGHT,
                        title: "foo",
                      })
                    }
                  />
                  <CopyableText
                    textToCopy="Potatos"
                    onCopy={() => showAlert("Woohoo")}
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
          <SuggestableChipInput
            onChipsChange={() => {}}
            initialValue={[]}
            textInputLabel="woah"
            suggestions={["potato"]}
            maxChips={3}
          />
        </Grid>
        <Grid item xs={4}>
          <DropdownMenu
            button={<Button onClick={() => {}}>foobar</Button>}
            menuItems={[
              {
                icon: <SendIcon fontSize="small" />,
                custom: <Button>potato</Button>,
              },
            ]}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
