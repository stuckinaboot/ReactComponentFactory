import * as React from "react";
import { Typography } from "@material-ui/core";
import RawCard from "mui-raw-card";

const GRAY = "#D8D8D8";

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
      elevation={elevation || 10}
    >
      <div style={innerCardStyle}>{children}</div>
    </RawCard>
  );
}
