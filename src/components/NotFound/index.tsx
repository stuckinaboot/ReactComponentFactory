import * as React from "react";
import { Grid, Typography } from "@material-ui/core";

export type ImageProps = { src: string; width?: string; height?: string };

export enum HeaderSize {
  SMALL = "small",
  LARGE = "large",
  XLARGE = "xlarge",
}

const DEFAULT_HEADER_VARIANT = "h5";

export default function NotFound(props: {
  headerText: string;
  image?: ImageProps;
  headerSize?: HeaderSize;
  bodyText?: string;
  bodyComponent?: React.ReactElement;
}): React.ReactElement {
  return (
    <Grid container alignItems="center">
      {props.image && (
        <Grid item xs={12}>
          <img
            src={props.image.src}
            width={props.image?.width}
            height={props.image?.height}
          />
        </Grid>
      )}
      <Grid item xs={12}>
        <Typography
          variant={
            props.headerSize === HeaderSize.XLARGE
              ? "h4"
              : props.headerSize === HeaderSize.LARGE
              ? "h5"
              : props.headerSize === HeaderSize.SMALL
              ? "h6"
              : DEFAULT_HEADER_VARIANT
          }
        >
          {props.headerText}
        </Typography>
        {props.bodyText && <Typography>{props.bodyText}</Typography>}
      </Grid>
      {props.bodyComponent && (
        <Grid item xs={12}>
          {props.bodyComponent}
        </Grid>
      )}
    </Grid>
  );
}
