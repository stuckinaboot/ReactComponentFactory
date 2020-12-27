import "./App.css";
import ColorButton from "./components/MuiColorButton";
import RawCard from "mui-raw-card";
import TitledCard from "mui-titled-card";
import { Grid } from "@material-ui/core";
import SimpleDialog from "mui-simple-dialog";
import CopyableText from "./components/CopyableText";
import SuggestableChipInput from "./components/SuggestableChipInput";
import DropdownMenu from "mui-dropdown";
import { showAlert, AlertLocation } from "show-alert";
import { Button, IconButton } from "@material-ui/core";
import StepDialog from "./components/StepDialog";
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
            button={
              <IconButton>
                <SendIcon fontSize="small" />
              </IconButton>
            }
            menuItems={[
              {
                icon: <SendIcon fontSize="small" />,
                custom: <Button>potato</Button>,
              },
            ]}
          />
        </Grid>
        <Grid item xs={4}>
          <StepDialog
            title="Dialog title"
            confirmBtnTitle="Confirm"
            steps={[
              { stepName: "Foobar", stepContents: "woah" },
              { stepName: "Foobar", stepContents: "hi" },
            ]}
            handleNextBtnPressed={() => {}}
          >
            fuck
          </StepDialog>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
