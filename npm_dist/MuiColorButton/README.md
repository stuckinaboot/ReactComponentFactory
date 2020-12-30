# Material-UI Color Button

Friendly customizable material-ui color button

## Overview

Material-UI buttons are nice-looking, but they feel almost like a template when you interact with them. Material-UI color button, on the other hand, feels friendly and like a native part of aa UI.

## Getting Started

### Install

`npm install mui-color-button`

### Example

**For simplicity, here's example code and output so you can start building right away**

#### Code

```
<ColorButton
  label={"Woohoo!"}
  textColor={"white"}
  backgroundColor={"red"}
/>
```

## Properties

```
label: string or React component, the title/body of the button;
textColor: string, representing a color;
backgroundColor: string, representing a color;
fontSize?: number, size of button font;
buttonPadding?: number, vertical padding of button;
buttonPaddingHorizontal?: number, horizontal padding of button;
borderRadius?: number, button corner radius (round colors = friendly);
isBold?: boolean, true if text should be bold;
onClick?: (event: React.MouseEvent) => any, on button click action;
style?: React.CSSProperties, additional custom style to add to the button;
children?: React.ReactNode, unstyled body component of the button;
onHoverProps?: CoreProps, describes how the button on hover;
```

## Quick pointers

- Just try it out, you'll be up and running in 30 seconds
