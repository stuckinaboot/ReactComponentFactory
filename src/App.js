import * as React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import ColorButton from "./components/MuiColorButton";
import RawCard from "./components/RawCard";
import TitledCard from "./components/TitledCard";
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
import Table from "./components/Table";

const SHOW_MAP = false;

function App() {
  const [mapCenter, setMapCenter] = React.useState({
    lat: 40.6892,
    long: -74.0445,
  });

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

  const map = (
    <div style={{ width: "100%", height: "100%" }}>
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
    </div>
  );

  const table = (
    <Table
      title={{
        label: "Racing Pigeons",
        subtitleLabel: "fishing",
        backgroundColor: "gray",
      }}
      columns={[
        {
          name: "name",
          header: "Dessert (100g serving)",
          cellProps: { style: { paddingRight: 0 } },
        },
        {
          name: "calories",
          header: "Calories",
          cellProps: { align: "right" },
        },
        { name: "fat", header: "Fat (g)", cellProps: { align: "right" } },
        {
          name: "carbs",
          header: "Carbs (g)",
          cellProps: { align: "right" },
        },
        {
          name: "protein",
          header: "Protein (g)",
          cellProps: { align: "right" },
        },
      ]}
      data={[
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 24,
          protein: 6.0,
        },
        {
          name: "Frozen yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
        },
        {
          name: "Jelly Bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7.0,
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0.0,
        },
        {
          name: "Marshmallow",
          calories: 318,
          fat: 0.0,
          carbs: 81,
          protein: 2.0,
        },
        {
          name: "Nougat",
          calories: 360,
          fat: 19.0,
          carbs: 9,
          protein: 37.0,
        },
        {
          name: "Oreo",
          calories: 437,
          fat: 18.0,
          carbs: 63,
          protein: 4.0,
        },
      ]}
    />
  );

  return (
    <div className="App">
      {appBar}
      <Grid container style={{ margin: 20 }}>
        {!SHOW_MAP && (
          <>
            <Grid item xs={4}>
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
            </Grid>
          </>
        )}
        {SHOW_MAP && (
          <Grid item xs={4} style={{ height: 500 }}>
            {map}
          </Grid>
        )}
        <Grid item xs={6} style={{ maxHeight: 200 }}>
          {table}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
