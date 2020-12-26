import React from "react";
import cogoToast from "cogo-toast";
import { Box, debounce, Grid } from "@material-ui/core";

enum AlertType {
  SUCCESS = "success",
  DANGER = "danger",
  INFO = "info",
  DEFAULT = "default",
  WARNING = "warning",
}

enum AlertLocation {
  BOTTOM_RIGHT = "bottom-right",
  TOP_RIGHT = "top-right",
}

const OFF_WHITE = "#fafafa";

// in milliseconds
const DEBOUNCE_DURATION = 300;

export function showAlert(
  body: React.ReactNode,
  options?: {
    timeout?: number;
    type?: AlertType;
    title?: string;
    location?: AlertLocation;
    button?: { title: string; onClick: () => any };
  }
) {
  const type =
    options != null && options.type != null ? options.type : AlertType.SUCCESS;
  const title = options != null && options.title != null ? options.title : "";
  const duration =
    options != null && options.timeout != null ? options.timeout : 5000;
  const position =
    options && options.location ? options.location : AlertLocation.BOTTOM_RIGHT;
  const button = options && options.button ? options.button : null;

  // duration is in milliseconds and hideAfter expects seconds
  // so we convert to seconds
  const opts = { position, hideAfter: duration / 1000 };

  const alertFn =
    type === AlertType.SUCCESS
      ? cogoToast.success
      : type === AlertType.WARNING
      ? cogoToast.warn
      : cogoToast.info;

  // Note: we do not use Typography (and thus neither Button nor ColorButton)
  // because for some reason this alert component (cogo-toast)
  // will adjust the font size of everything on page while displaying
  // if Typography is used.
  // https://github.com/Cogoport/cogo-toast/issues/65
  const { hide } = alertFn(
    <Grid container style={{ fontSize: 16 }}>
      <Grid item xs={12} style={{ width: "100%", minWidth: 300 }}>
        {body}
        {button != null ? (
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              width: "100%",
            }}
          >
            <Box
              style={{
                backgroundColor: OFF_WHITE,
                padding: 10,
                fontWeight: "bold",
              }}
              onClick={debounce(button.onClick, DEBOUNCE_DURATION)}
            >
              {button.title}
            </Box>
          </Box>
        ) : null}
      </Grid>
    </Grid>,
    // Include options and hide onClick
    {
      ...opts,
      onClick: () => (hide != null ? hide() : null),
      heading: title,
    }
  );
}
