import * as React from "react";
import MuiTable from "mui-virtualized-table";
import { AutoSizer } from "react-virtualized";

// MuiTable reference
// https://github.com/techniq/mui-virtualized-table

https: export type Column = { name: string; header: string };

export default function Table(props: {
  columns: Column[];
  // Data to render using defined columns.
  // For each element in data, there should be values for
  // some "name"s from columns
  data: any[];
}): React.ReactElement {
  return (
    <AutoSizer>
      {({ width, height }) => (
        <MuiTable
          height={height}
          columns={props.columns.map(({ name, header }, idx) => ({
            name,
            header,
            cellProps:
              idx === 0 ? { style: { paddingRight: 0 } } : { align: "right" },
          }))}
          width={width}
          data={props.data}
          includeHeaders={true}
        />
      )}
    </AutoSizer>
  );
}
