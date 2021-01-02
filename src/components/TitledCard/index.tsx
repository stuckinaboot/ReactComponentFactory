import * as React from "react";
import { Typography } from "@material-ui/core";
import RawCard from "mui-raw-card";

const GRAY = "#D8D8D8";

const DEFAULT_ELEVATION = 0;

export default function TitledCard(props: {
  titleBackgroundColor: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  innerCardStyle?: React.CSSProperties;
  elevation?: number;
}) {
  const {
    children,
    title,
    subtitle,
    titleBackgroundColor,
    style,
    innerCardStyle,
    elevation,
  } = props;

  return (
    <RawCard
      title={
        <div
          style={{
            width: "100%",
            backgroundColor: titleBackgroundColor,
            textAlign: "center",
            borderRadius: `5px 5px 0px 0px`,
          }}
        >
          <Typography variant="h6">{title}</Typography>
          {subtitle && <Typography variant="caption">{subtitle}</Typography>}
        </div>
      }
      style={{ backgroundColor: GRAY, ...(style != null ? style : {}) }}
      // Use conditional to ensure that even if elevation is defined to
      // be 0, elevation will be used instead of the default value
      elevation={elevation != null ? elevation : DEFAULT_ELEVATION}
    >
      <div style={innerCardStyle}>{children}</div>
    </RawCard>
  );
}
