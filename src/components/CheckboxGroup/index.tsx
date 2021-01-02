import * as React from "react";
import {
  FormControlLabel,
  FormControl,
  FormLabel,
  Checkbox,
  FormGroup,
} from "@material-ui/core";

export type CheckboxItem = { label: string; id: string };

const DEFAULT_CHECKBOX_COLOR = "black";

export default function CheckboxGroup(props: {
  items: CheckboxItem[];
  onChange?: (values: { [checkboxId: string]: string }) => any;
  label?: string;
  checkboxColor?: string;
}): React.ReactElement {
  const [values, setValues] = React.useState(
    Object.fromEntries(props.items.map(({ id }) => [id, false]))
  );

  React.useEffect(() => {
    if (props.onChange == null) {
      return;
    }
    props.onChange(values);
  }, []);

  return (
    <FormControl component="fieldset">
      {props.label && (
        <FormLabel
          style={{ textAlign: "left", fontSize: "0.8rem", paddingLeft: 10 }}
        >
          {props.label}
        </FormLabel>
      )}
      <FormGroup>
        {props.items.map((item) => (
          <FormControlLabel
            control={
              <Checkbox
                checked={values[item.id]}
                onChange={(event) =>
                  setValues((curr) => ({
                    ...curr,
                    [item.id]: event.target?.checked,
                  }))
                }
                style={{ color: props.checkboxColor }}
              />
            }
            label={item.label}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
}
