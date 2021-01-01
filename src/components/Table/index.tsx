import * as React from "react";
import MUIDataTable from "mui-datatables";
import ContainerDimensions from "react-container-dimensions";
import { Typography } from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const DEFAULT_BACKGROUND_COLOR = "white";

export type Column = { name: string; label: string };

export type Title = {
  label: string;
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
          // Ensures the table will expand cleanly (TODO doesn't do anything right now)
          // https://stackoverflow.com/questions/54651489/how-to-set-height-to-mui-datatable-with-responsive-scroll
          responsiveScroll: {
            maxHeight: "none",
          },
        },
        MUIDataTableToolbar: {
          root: {
            borderRadius: `${borderRadius}px ${borderRadius}px 0px 0px`,
            backgroundColor: props.title?.backgroundColor,
            textAlign: "right",
          },
          icon: {
            color: props.title?.textColor,
          },
        },
        MUIDataTableHeadCell: {
          root: {
            fontWeight: "bold",
            height: 5,
          },
        },
        MUIDataTableBodyCell: {
          root: {
            paddingTop: 3,
            paddingBottom: 3,
          },
        },
      },
    });

  return (
    <ContainerDimensions>
      {({ height, width }) => (
        <div style={{ height, width }}>
          <MuiThemeProvider theme={getMuiTheme()}>
            <MUIDataTable
              title={
                <div style={{ color: props.title?.textColor }}>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: props.title?.fontSize,
                    }}
                  >
                    {props.title?.label || ""}
                  </Typography>
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
                // Shows the cursor as "pointer"
                selectableRowsOnClick: true,
                onRowClick:
                  props.onClick != null
                    ? (rowVals) =>
                        // @ts-ignore
                        props.onClick(rowVals)
                    : undefined,
              }}
            />
          </MuiThemeProvider>
        </div>
      )}
    </ContainerDimensions>
  );
}
