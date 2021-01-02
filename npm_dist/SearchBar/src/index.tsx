import * as React from "react";
import SearchBar from "material-ui-search-bar";

const SLIGHTLY_TRANSPARENT_BACKGROUND_COLOR = "rgba(255,255,255,0.4)";
const BORDER_RADIUS = 20;

export default function CustomSearchBar(props: {
  onValueChange: (value: string) => any;
  placeholder?: string;
  transparent?: boolean;
  border?: boolean;
}): React.ReactElement {
  const [val, setVal] = React.useState("");
  const [focused, setFocused] = React.useState(false);

  return (
    <div
      style={{ display: "flex" }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <SearchBar
        value={val}
        onChange={(newValue) => {
          setVal(newValue);
          props.onValueChange(newValue);
        }}
        placeholder={props.placeholder}
        style={{
          width: "100%",
          background: props.transparent
            ? SLIGHTLY_TRANSPARENT_BACKGROUND_COLOR
            : undefined,
          borderRadius: BORDER_RADIUS,
          boxShadow: "none",
          border:
            props.border && focused
              ? "1px solid #3f51b5"
              : props.border && !focused
              ? "1px solid #A2A2A2"
              : undefined,
          height: 40,
        }}
        onCancelSearch={() => {
          setVal("");
          props.onValueChange("");
        }}
      />
    </div>
  );
}
