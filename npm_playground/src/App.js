import "./App.css";
import { Grid, Button, Typography } from "@material-ui/core";
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
import Table from "mui-simple-table";

function App() {
  const table = (
    <Table
      title={{
        label: "Yummy foods",
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
      <CustomAppBar
        navItems={[
          { text: "Page 1", endpoint: "/foo" },
          { text: "Page 2", endpoint: "/bar" },
          { text: "Page 3", endpoint: "/car" },
        ]}
        selectedNavItemText="Page 2"
        logoImg={
          "https://cdn.vox-cdn.com/thumbor/Ous3VQj1sn4tvb3H13rIu8eGoZs=/0x0:2012x1341/1400x788/filters:focal(0x0:2012x1341):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
        }
        maxLogoWidth={120}
      />
      <Grid container style={{ margin: 20 }}>
        <Grid item xs={6} style={{ maxHeight: 500 }}>
          {table}
        </Grid>
        <Grid item xs={4}>
          <RawCard title="n">
            <SimpleDialog
              title="Testing"
              description={
                <>
                  <Typography>
                    Some text could go here. Press the button to show an alert.
                    Press the copyable text to copy
                  </Typography>
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
        <Grid item xs={4} style={{ marginLeft: 10 }}>
          <TitledCard
            titleBackgroundColor={"orange"}
            title="fudge"
            elevation={1}
          >
            <SuggestableChipInput
              onChipsChange={() => {}}
              initialValue={[]}
              textInputLabel="woah"
              suggestions={["potato"]}
              maxChips={3}
            />
          </TitledCard>
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
          <RawCard>{isMobile() ? "mobile" : "not mobile"}</RawCard>
          <br />
        </Grid>
        <Grid item xs={4}>
          <RawFileDialog
            title="Raw File"
            endpoint="https://www.w3.org/TR/PNG/iso_8859-1.txt"
          >
            Click to show raw file
          </RawFileDialog>
        </Grid>
        <Grid item xs={5}>
          <TextField
            label="Name"
            onValueChange={() => {}}
            helperText="foobar"
            placeholder="foo tacoo"
          />
        </Grid>
        <Grid item xs={5}>
          <Select
            items={[{ text: "USA", value: 1 }]}
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
