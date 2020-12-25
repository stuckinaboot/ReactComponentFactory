import * as React from "react";
import { ComponentProps } from "./typings";
import { Button, Box, Typography } from "@material-ui/core";

export default function ColorButton(props: ComponentProps): React.ReactElement {
  // There is a known hover bug where hover state stays true
  // if you move mouse fast. I tried solutions here but they didn't work to fix
  // https://github.com/facebook/react/issues/4492
  const [isHovering, setIsHovering] = React.useState(false);

  const core = (
    <Button
      onClick={(e) => {
        if (props.onClick != null) props.onClick(e);
      }}
      style={{
        padding: 0,
        borderRadius: props.borderRadius || 8,
        textTransform: "none",
        ...props.style,
      }}
    >
      <Box
        style={{
          paddingLeft: props.buttonPaddingHorizontal
            ? props.buttonPaddingHorizontal
            : 15,
          paddingRight: props.buttonPaddingHorizontal
            ? props.buttonPaddingHorizontal
            : 15,
          paddingTop: props.buttonPadding ? props.buttonPadding : 10,
          paddingBottom: props.buttonPadding ? props.buttonPadding : 10,
          backgroundColor: props.backgroundColor,
          borderRadius: props.borderRadius || 8,
          width: "100%",
          height: "100%",
        }}
      >
        <Typography
          style={{
            fontSize: props.fontSize ? props.fontSize : 16,
            color: props.textColor,
            fontWeight: props.isBold ? "bold" : "normal",
          }}
        >
          {props.label}
        </Typography>
      </Box>
      {props.children}
    </Button>
  );

  if (props.onHoverProps == null) {
    return core;
  }

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering ? <ColorButton {...props.onHoverProps} /> : core}
    </div>
  );
}
