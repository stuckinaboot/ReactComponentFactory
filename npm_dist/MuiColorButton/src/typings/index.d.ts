/**
 * Types
 */

type CoreProps = {
  label: string | React.ReactNode;
  textColor: string;
  backgroundColor: string;
  fontSize?: number;
  buttonPadding?: number;
  buttonPaddingHorizontal?: number;
  borderRadius?: number;
  isBold?: boolean;
  onClick?: (event: React.MouseEvent) => any;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

type HoverProps = { onHoverProps?: CoreProps };

export type ComponentProps = CoreProps & HoverProps;
