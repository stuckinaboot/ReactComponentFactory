import * as React from "react";

import { Chip, Grid, TextField, Typography } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function SuggestableChipInput(props: {
  onChipsChange: (chips: string[]) => any;
  initialValue: string[];
  textInputLabel: string;
  suggestions: string[];
  onChipForceAdded?: () => any;
  modifyChipToForceAdd?: string;
  helperText?: string;
  maxChips: number;
}) {
  const [currChips, setCurrChips] = React.useState(props.initialValue);
  const [currTxt, setCurrTxt] = React.useState("");

  // Set initial down for today to be the initial value
  React.useEffect(() => {
    props.onChipsChange(props.initialValue);
  }, []);

  React.useEffect(() => {
    if (props.modifyChipToForceAdd == null) {
      return;
    }
    const potentialAddedChip = props.modifyChipToForceAdd;

    // Only add chip if the chip has contents
    if (potentialAddedChip == null || potentialAddedChip === "") {
      if (props.onChipForceAdded != null) {
        props.onChipForceAdded();
      }
      return;
    }
    // Only add chip if that would not exceed max and
    // if chip is not already present
    if (
      currChips.length >= props.maxChips ||
      currChips.indexOf(potentialAddedChip) !== -1
    ) {
      if (props.onChipForceAdded != null) {
        props.onChipForceAdded();
      }
      return;
    }
    const updatedChips = [...currChips, potentialAddedChip];
    setCurrChips(updatedChips);

    if (props.onChipForceAdded != null) {
      props.onChipForceAdded();
    }
    props.onChipsChange(updatedChips);
  }, [props.modifyChipToForceAdd]);

  const handleChipsChange = (chips: string[]) => {
    if (chips.length > props.maxChips) {
      // Only allow at most DOWN_FOR_TODAY_MAX chips
      return;
    }
    if (chips.length > currChips.length) {
      const trimmedFinalChip = chips[chips.length - 1].trim();
      if (trimmedFinalChip.length === 0) {
        // Return if the chip was just whitespace
        return;
      }

      chips[chips.length - 1] = trimmedFinalChip;
      if (currChips.indexOf(chips[chips.length - 1]) !== -1) {
        // Chip already added, so return early
        return;
      }
    }
    if (chips.length > currChips.length) {
      // Adding a chip, so clear the text
      // Note: this fixes a bug where clicking text field and adding a chip,
      // removing the chip while still focused on text field,
      // and then blurring text field would result in the last
      // chip removed coming back on blur
      setCurrTxt("");
    }
    setCurrChips(chips);
    props.onChipsChange(chips);
  };

  function onTextValChanged(event: any) {
    if (event.target == null) {
      return;
    }
    const val = event.target.value;
    setCurrTxt(val);
  }

  function onInputBlur() {
    console.log("FOO", currChips, currTxt, currTxt.length);
    if (currTxt.length === 0) {
      console.log(currChips);
      return;
    }
    handleChipsChange([...currChips, currTxt]);
  }

  return (
    <Grid container alignContent="center" alignItems="center" justify="center">
      <Grid item xs={12} sm={11}>
        <Autocomplete
          disableClearable
          value={currChips}
          multiple
          getOptionLabel={(option: any) => option}
          defaultValue={props.initialValue}
          filterSelectedOptions
          onBlur={onInputBlur}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                label={
                  <Typography style={{ whiteSpace: "normal" }}>
                    {option}
                  </Typography>
                }
                {...getTagProps({ index })}
                style={{ height: "100%" }}
              />
            ))
          }
          // Only allow entering custom text if the # chips
          // is less than allowed
          {...(currChips.length < props.maxChips
            ? {
                freeSolo: true,
                options: props.suggestions,
                noOptionsText: "No options",
              }
            : {
                freeSolo: false,
                options: [],
                noOptionsText: `Max of ${props.maxChips}`,
              })}
          fullWidth
          onChange={(_, values) => handleChipsChange(values)}
          renderInput={(params) => (
            <TextField
              style={{ whiteSpace: "nowrap", overflowWrap: "break-word" }}
              // Only use multiple lines if the user can continue
              // entering more chips (otherwise, pressing enter
              // will increase the number of lines rather than
              // number of chips)
              {...(currChips.length < props.maxChips
                ? {
                    multiline: true,
                  }
                : {})}
              {...params}
              variant="outlined"
              label={props.textInputLabel}
              helperText={props.helperText || "Press enter to add multiple"}
              onChange={onTextValChanged}
            />
          )}
        />
      </Grid>
    </Grid>
  );
}
