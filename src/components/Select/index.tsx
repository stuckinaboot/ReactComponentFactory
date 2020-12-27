import * as React from "react";
import { MenuItem, Select } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";

const NONE_VALUE = "CustomSelectComponentNoneValue";

export type SelectItemProps = { text: string; value: any };

export default function CustomSelect(props: {
  items: SelectItemProps[];
  onValueChange: (updatedValue: any) => any;
  placeholder?: string;
  initialValue?: any;
  label?: string;
}): React.ReactElement {
  const [value, setValue] = React.useState<any | undefined>(
    props.initialValue || NONE_VALUE
  );

  return (
    <>
      {props.label != null && (
        <InputLabel
          style={{ textAlign: "left", fontSize: "0.8rem", paddingLeft: 10 }}
        >
          {props.label}
        </InputLabel>
      )}
      <Select
        fullWidth
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
          PaperProps: {
            style: {
              borderRadius: 20,
            },
          },
        }}
        // Top margin is meant to cause the same visual appearance
        // as npm module mui-text-field
        style={{ borderRadius: 20, textAlign: "left", marginTop: 8 }}
      >
        {props.placeholder != null && (
          <MenuItem value={NONE_VALUE} disabled>
            {props.placeholder}
          </MenuItem>
        )}
        {props.items.map(({ text, value }) => (
          <MenuItem value={value}>{text}</MenuItem>
        ))}
      </Select>
    </>
  );
}
