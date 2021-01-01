import * as React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import InputLabel from "@material-ui/core/InputLabel";

const BORDER_RADIUS = 20;

export default function MyComponent(props: {
  label?: string;
}): React.ReactElement {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {props.label != null && (
        <InputLabel
          style={{ textAlign: "left", fontSize: "0.8rem", paddingLeft: 10 }}
        >
          {props.label}
        </InputLabel>
      )}
      <KeyboardDatePicker
        autoOk
        variant="inline"
        margin="dense"
        fullWidth
        inputVariant="outlined"
        format="MM/dd/yyyy"
        value={selectedDate}
        InputAdornmentProps={{ position: "start" }}
        onChange={(date) => (date != null ? setSelectedDate(date) : null)}
        InputProps={{
          style: { borderRadius: BORDER_RADIUS },
        }}
      />
    </MuiPickersUtilsProvider>
  );
}
