import * as React from "react";
import { TextField, TextFieldProps } from "@material-ui/core";
import { useEffect } from "react";

export default function CustomTextField(
  props: {
    onValueChange: (updatedValue: string) => any;
    initialValue?: string;
    label?: string;
    password?: boolean;
    maxCharacters?: number;
  } & TextFieldProps
): React.ReactElement {
  const [value, setValue] = React.useState("");
  const [helperText, setHelperText] = React.useState("");

  useEffect(() => {
    updateValue(props.initialValue || "");
  }, []);

  function updateValue(val: string) {
    if (props.maxCharacters != null) {
      const diff = props.maxCharacters - val.length;
      if (diff < 0) {
        return;
      }
      setHelperText(`${diff} characters remaining`);
    }
    setValue(val);
    props.onValueChange(val);
  }

  return (
    <TextField
      // margin="dense"
      label={props.label}
      variant="outlined"
      fullWidth
      value={value}
      onChange={(e) => updateValue(e.target.value)}
      InputProps={{ style: { borderRadius: 20 } }}
      InputLabelProps={{ shrink: true }}
      helperText={helperText}
      {...(props.password ? { password: true } : {})}
      {...props}
    />
  );
}
