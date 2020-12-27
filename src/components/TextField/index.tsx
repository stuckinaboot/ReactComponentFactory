import * as React from "react";
import { TextField } from "@material-ui/core";
import { useEffect } from "react";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";

export default function CustomTextField({
  onValueChange,
  initialValue,
  label,
  password,
  maxCharacters,
  multiline,
}: {
  onValueChange: (updatedValue: string) => any;
  initialValue?: string;
  label?: string;
  password?: boolean;
  maxCharacters?: number;
  multiline?: boolean;
}): React.ReactElement {
  const [value, setValue] = React.useState("");
  const [helperText, setHelperText] = React.useState("");

  useEffect(() => {
    updateValue(initialValue || "");
  }, []);

  function updateValue(val: string) {
    if (maxCharacters != null) {
      const diff = maxCharacters - val.length;
      if (diff < 0) {
        return;
      }
      setHelperText(`${diff} characters remaining`);
    }
    setValue(val);
    onValueChange(val);
  }

  return (
    <>
      {label != null && (
        <InputLabel
          style={{ textAlign: "left", fontSize: "0.8rem", paddingLeft: 10 }}
        >
          {label}
        </InputLabel>
      )}
      <TextField
        margin="dense"
        variant="outlined"
        fullWidth
        value={value}
        onChange={(e) => updateValue(e.target.value)}
        InputProps={{ style: { borderRadius: 20 } }}
        InputLabelProps={{ shrink: true }}
        helperText={helperText}
        multiline={multiline}
        {...(password ? { password: true } : {})}
      />
    </>
  );
}
