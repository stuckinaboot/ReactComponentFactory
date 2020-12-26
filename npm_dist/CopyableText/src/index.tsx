import * as React from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";

import { Button, TextField, InputAdornment } from "@material-ui/core";
import FileCopyIcon from "@material-ui/icons/FileCopy";

export default function CopyableText(props: {
  textToCopy: string;
  textToShow?: string;
  onCopy?: () => any;
  children?: React.ReactNode;
}) {
  return (
    <CopyToClipboard
      text={props.textToCopy}
      onCopy={() => {
        if (props.onCopy == null) {
          return;
        }
        props.onCopy();
      }}
    >
      {props.children == null ? (
        <Button fullWidth>
          <TextField
            color="secondary"
            disabled
            value={props.textToShow || props.textToCopy}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <FileCopyIcon fontSize="inherit" />
                </InputAdornment>
              ),
              style: { fontSize: "0.8rem" },
            }}
            // Show the cursor as a hand to indicate the text field
            // is clickable
            inputProps={{ style: { cursor: "pointer" } }}
          />
        </Button>
      ) : (
        props.children
      )}
    </CopyToClipboard>
  );
}
