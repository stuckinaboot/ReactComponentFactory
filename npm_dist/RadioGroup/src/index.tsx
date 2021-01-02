import * as React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@material-ui/core";

// RadioGroup only accepts string
// https://github.com/mui-org/material-ui/issues/8180
export type RadioButtonItem = { title: string; value: string };

const DEFAULT_RADIO_COLOR = "black";

export default function RadioButtonGroup(props: {
  items: RadioButtonItem[];
  onChange?: (value: string) => any;
  label?: string;
  radioColor?: string;
}): React.ReactElement {
  const [value, setValue] = React.useState(
    props.items.length > 0 ? props.items[0].value : null
  );

  return (
    <FormControl component="fieldset">
      {props.label && (
        <FormLabel
          style={{ textAlign: "left", fontSize: "0.8rem", paddingLeft: 10 }}
        >
          {props.label}
        </FormLabel>
      )}
      <RadioGroup
        value={value}
        onChange={(event) => {
          if (event.target == null) {
            return;
          }
          const updatedValue = event.target?.value;
          setValue(updatedValue);
          if (props.onChange == null) {
            return;
          }
          props.onChange(updatedValue);
        }}
      >
        {props.items.map((item) => (
          <FormControlLabel
            value={item.value}
            control={
              <Radio
                style={{ color: props.radioColor || DEFAULT_RADIO_COLOR }}
              />
            }
            label={item.title}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
