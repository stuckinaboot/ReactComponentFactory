import React from "react";
import { Paper } from "@material-ui/core";

export default function RawCard(props: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  title?: React.ReactNode;
  elevation?: number;
}): React.ReactElement {
  return props.title == null ? (
    <Paper style={{ padding: 10, ...props.style }} elevation={props.elevation}>
      {props.children}
    </Paper>
  ) : (
    <Paper style={props.style} elevation={props.elevation}>
      {props.title}
      <div style={{ padding: 10 }}>{props.children}</div>
    </Paper>
  );
}
