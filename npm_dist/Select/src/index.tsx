import * as React from "react";
import { MenuItem, Select } from "@material-ui/core";

export type SelectItemProps = { text: string; value: any };

export default function CustomSelect(props: {
  items: SelectItemProps[];
  onValueChange: (updatedValue: any) => any;
  initialValue?: any;
}): React.ReactElement {
  const [value, setValue] = React.useState<any | undefined>(props.initialValue);

  return (
    <Select
      value={value}
      onChange={(event) => {
        if (event.target == null) {
          return;
        }
        const updated = event.target.value;
        setValue(updated);
        props.onValueChange(updated);
      }}
      variant="outlined"
      margin="dense"
      MenuProps={{
        style: { borderRadius: 20 },
        PaperProps: {
          style: {
            borderRadius: 20,
          },
        },
      }}
      style={{ borderRadius: 20 }}
    >
      {props.items.map(({ text, value }) => (
        <MenuItem value={value}>{text}</MenuItem>
      ))}
    </Select>
  );
}
