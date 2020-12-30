import "./App.css";
import { Grid, Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

import ColorButton from "mui-color-button";
import RawCard from "mui-raw-card";
import TitledCard from "mui-titled-card";
import SimpleDialog from "mui-simple-dialog";
import CopyableText from "mui-copyable-text";
import SuggestableChipInput from "suggestable-chip-input";
import DropdownMenu from "mui-dropdown";
import { showAlert, AlertLocation } from "show-alert";
import StepDialog from "mui-step-dialog";
import isMobile from "check-mobile";
import RawFileDialog from "raw-file-dialog";
import TextField from "mui-text-field";
import Select from "mui-select";
import CustomAppBar from "mui-app-bar";
import Map from "simple-geo-map";

function App() {
  return (
    <div className="App">
      <CustomAppBar
        navItems={[{ text: "potato", endpoint: "/foo" }]}
        selectedNavItemText="potato"
      />
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
        <Grid item xs={12}>
          <DropdownMenu
            buttonContents={<SendIcon fontSize="small" />}
            menuItems={[
              {
                icon: <SendIcon fontSize="small" />,
                title: "normal",
              },
              {
                icon: <SendIcon fontSize="small" />,
                custom: <Button>potato</Button>,
              },
            ]}
          />
        </Grid>
        <Grid item xs={12}>
          <StepDialog
            title="Dialog title"
            confirmBtnTitle="Confirm"
            steps={[
              { stepName: "Foobar", stepContents: "woah" },
              { stepName: "Foobar", stepContents: "hi" },
            ]}
            handleNextBtnPressed={() => {}}
          >
            woah
          </StepDialog>
        </Grid>
        <Grid item xs={4} style={{ textAlign: "left" }}>
          {isMobile() ? "mobile" : "not mobile"}
        </Grid>
        <Grid item xs={4}>
          <RawFileDialog
            title="Raw File"
            endpoint="https://www.w3.org/TR/PNG/iso_8859-1.txt"
          >
            Click to show raw file
          </RawFileDialog>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Foobar"
            onValueChange={() => {}}
            helperText="foobar"
            placeholder="foo tacoo"
          />
        </Grid>
        <Grid item xs={6}>
          <Select
            items={[{ text: "foo", value: 1 }]}
            label="Country"
            onValueChange={() => console.log("foobar")}
          />
        </Grid>
        <Grid item xs={6}>
          <div style={{ height: 500, width: "100%" }}>
            <Map
              center={{ lat: 0, long: 0 }}
              markerItems={[
                {
                  lat: 40.6892,
                  long: -74.0445,
                  popupContent: "Statue of Liberty",
                },
                {
                  lat: 40.7004,
                  long: -74.0542,
                  popupContent: "Liberty State Park",
                },
                { lat: 41.034, long: -73.7629, popupContent: "White plains" },
              ]}
              animateUpdateToView
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
