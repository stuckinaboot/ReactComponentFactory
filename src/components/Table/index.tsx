import * as React from "react";
import MUIDataTable from "mui-datatables";
import { Typography } from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const DEFAULT_BACKGROUND_COLOR = "white";

const columns = [
  {
    name: "name",
    label: "Name",
  },
  {
    name: "company",
    label: "Company",
  },
  {
    name: "city",
    label: "City",
  },
  {
    name: "state",
    label: "State",
  },
];

const data = [
  { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
  { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
  { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
];

export type Column = { name: string; label: string };

export type Title = {
  label: string;
  subtitleLabel?: string;
  fontSize?: number;
  backgroundColor?: string;
  textColor?: string;
};

const DEFAULT_BORDER_RADIUS = 5;

export default function Table(props: {
  columns: Column[];
  // Data to render using defined columns.
  // For each element in data, there should be values for
  // some "name"s from columns
  data: any[];
  title?: Title;
  backgroundColor?: string;
  borderRadius?: number;
  onClick?: (rowValues: any[]) => any;
}): React.ReactElement {
  const borderRadius = props.borderRadius || DEFAULT_BORDER_RADIUS;
  // Styling the table
  // https://github.com/gregnb/mui-datatables/blob/master/examples/customize-styling/index.js
  // Styles are modelled off TitledCard (mui-titled-card on npm)
  const getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        // @ts-ignore
        MUIDataTable: {
          paper: {
            borderRadius: 5,
            boxShadow: "none",
            backgroundColor: props.backgroundColor || DEFAULT_BACKGROUND_COLOR,
          },
        },
        MUIDataTableToolbar: {
          root: {
            borderRadius: `${borderRadius}px ${borderRadius}px 0px 0px`,
            backgroundColor: props.title?.backgroundColor,
          },
          icon: {
            color: props.title?.textColor,
          },
        },
        // Note: this will affect all MuiTableCell in the entire app,
        // but that should be fine as we intend to provide consistent styling
        MuiTableCell: {
          head: { fontWeight: "bold" },
        },
      },
    });

  return (
    <MuiThemeProvider theme={getMuiTheme()}>
      <MUIDataTable
        title={
          <div style={{ color: props.title?.textColor }}>
            <Typography
              variant="h6"
              style={{ fontSize: props.title?.fontSize }}
            >
              {props.title?.label || ""}
            </Typography>
            {props.title?.subtitleLabel && (
              <Typography variant="caption">
                {props.title?.subtitleLabel}
              </Typography>
            )}
          </div>
        }
        data={props.data}
        columns={props.columns.map((col, idx) => ({
          ...col,
          options:
            idx !== 0
              ? {
                  setCellProps: () => ({
                    align: "center",
                  }),
                }
              : undefined,
        }))}
        options={{
          // Remove checkboxes
          selectableRows: "none",
          // Remove extra feature icons
          download: false,
          print: false,
          viewColumns: false,
          filter: false,
          // Customize search textfield
          // https://github.com/gregnb/mui-datatables/pull/771
          customSearchRender: undefined,
          elevation: 0,
          rowsPerPageOptions: [10],
          onRowClick:
            props.onClick != null
              ? (rowVals) =>
                  // @ts-ignore
                  props.onClick(rowVals)
              : undefined,
        }}
      />
    </MuiThemeProvider>
  );
}
