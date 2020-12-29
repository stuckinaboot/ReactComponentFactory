import * as React from "react";
import "./App.css";
import ColorButton from "./components/MuiColorButton";
import RawCard from "mui-raw-card";
import TitledCard from "./components/TitledCard";
import { Grid } from "@material-ui/core";
import SimpleDialog from "./components/SimpleDialog";
import CopyableText from "./components/CopyableText";
import SuggestableChipInput from "./components/SuggestableChipInput";
import DropdownMenu from "./components/DropdownMenu";
import { showAlert, AlertLocation } from "show-alert";
import { Button } from "@material-ui/core";
import StepDialog from "./components/StepDialog";
import SendIcon from "@material-ui/icons/Send";
import isMobile from "./components/CheckMobile";
import RawFileDialog from "./components/RawFileDialog";
import TextField from "./components/TextField";
import Select from "./components/Select";
import CustomAppBar from "./components/CustomAppBar";
import Map from "./components/Map";

function App() {
  const [mapCenter, setMapCenter] = React.useState({
    lat: 40.6892,
    long: -74.0445,
  });
  const [marker1Point, setMarker1Point] = React.useState({
    lat: 40.6892,
    long: -74.0445,
  });
  const pt = React.useRef({
    lat: 40.6892,
    long: -74.0445,
  });

  // Animates the marker.
  // Note: this will also re-render the whole map, which
  // will reset the map's center as well to its center prop
  // React.useEffect(() => {
  //   setInterval(() => {
  //     pt.current = {
  //       lat: pt.current.lat + 0.001,
  //       long: pt.current.long + 0.001,
  //     };
  //     setMarker1Point({ lat: pt.current.lat, long: pt.current.long });
  //   }, 1000);
  // }, []);

  const appBar = (
    <CustomAppBar
      navItems={[{ text: "potato", endpoint: "/foo" }]}
      selectedNavItemText="potato"
    />
  );

  const rawCard = (
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
  );

  const titledCard = <TitledCard titleBackgroundColor={"red"} title="foo" />;

  const chipInput = (
    <SuggestableChipInput
      onChipsChange={() => {}}
      initialValue={[]}
      textInputLabel="woah"
      suggestions={["potato"]}
      maxChips={3}
    />
  );

  console.log("HIT", marker1Point, pt.current);

  return (
    <div className="App">
      {/* {appBar} */}
      <Grid container style={{ margin: 20 }}>
        {/* <Grid item xs={4}>
          {rawCard}
        </Grid>
        <Grid item xs={4}>
          {titledCard}
        </Grid>
        <Grid item xs={4}>
          {chipInput}
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
          </Grid> */}
        <Grid item xs={4} style={{ height: 500 }}>
          <Button
            onClick={() =>
              setMapCenter({
                lat: 41.034,
                long: -73.7629,
              })
            }
          >
            White Plains
          </Button>
          <Button
            onClick={() =>
              setMapCenter({
                lat: 40.6892,
                long: -74.0445,
              })
            }
          >
            Statue of Liberty
          </Button>
          <div style={{ height: "100%", width: "100%" }}>
            <Map
              center={mapCenter}
              markerItems={[
                {
                  lat: marker1Point.lat, // 40.6892,
                  long: marker1Point.long, // -74.0445,
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
