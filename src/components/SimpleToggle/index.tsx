import * as React from "react";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
import ColorButton from "mui-color-button";

export type ToggleButtonItem<T> = { color: string; title: string; value: T };

const BORDER_RADIUS = 5;

export default function Toggle<T>(props: {
  items: ToggleButtonItem<T>[];
  onChange: (val: T) => any;
  selectedFontColor?: string;
  fontColor?: string;
  disableAllCaps?: boolean;
}): React.ReactElement {
  const [val, setVal] = React.useState<T>(props.items[0]?.value);

  const numBtns = props.items.length;
  const width = Math.round(100 / numBtns) + "%";

  return (
    <div
      style={{
        paddingTop: 0,
        display: "flex",
        width: "100%",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ToggleButtonGroup
        value={val}
        exclusive
        onChange={(_, updatedVal: T) => {
          if (updatedVal == null) {
            // Prevent deselecting any option
            return;
          }
          setVal(updatedVal);
          props.onChange(updatedVal);
        }}
        style={{ width: "70%" }}
      >
        fudge
        {props.items.map((item, idx) => (
          <ToggleButton
            style={{
              width,
              ...(val === item.value
                ? {
                    color: props.selectedFontColor,
                    backgroundColor: item.color,
                  }
                : { color: props.fontColor }),
              borderRadius:
                idx === 0 && numBtns === 1
                  ? BORDER_RADIUS
                  : idx === 0 && numBtns > 1
                  ? // First button has top left, bottom left round
                    `${BORDER_RADIUS}px 0px 0px ${BORDER_RADIUS}px`
                  : idx === numBtns - 1
                  ? // Last button has top left, bottom left round
                    `0px ${BORDER_RADIUS}px ${BORDER_RADIUS}px 0px`
                  : // Internal button
                    0,
              ...(props.disableAllCaps ? { textTransform: "none" } : {}),
            }}
            value={item.value}
          >
            {item.title}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}
