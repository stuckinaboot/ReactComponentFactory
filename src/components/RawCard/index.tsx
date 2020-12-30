import * as React from "react";
import { Paper } from "@material-ui/core";

const BORDER_RADIUS = 5;

export default function RawCard(props: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  title?: React.ReactNode;
  elevation?: number;
}): React.ReactElement {
  return props.title == null ? (
    <Paper
      style={{ padding: 10, borderRadius: BORDER_RADIUS, ...props.style }}
      elevation={props.elevation}
    >
      {props.children}
    </Paper>
  ) : (
    <Paper
      style={{ borderRadius: BORDER_RADIUS, ...props.style }}
      elevation={props.elevation}
    >
      {props.title}
      <div style={{ padding: 10 }}>{props.children}</div>
    </Paper>
  );
}
