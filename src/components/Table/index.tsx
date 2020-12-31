import * as React from "react";
import MUIDataTable from "mui-datatables";

const columns = [
  {
    name: "name",
    label: "Name",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "company",
    label: "Company",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "city",
    label: "City",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "state",
    label: "State",
    options: {
      filter: true,
      sort: false,
    },
  },
];

const data = [
  { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
  { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
  { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
  { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
];

export default function Table(props: {
  columns: string[];
  // Data to render using defined columns.
  // For each element in data, there should be values for
  // some "name"s from columns
  data: any[];
}): React.ReactElement {
  return (
    <MUIDataTable
      title={"Employee List"}
      data={data}
      columns={columns}
      options={{ filterType: "textField" }}
    />
  );
}
