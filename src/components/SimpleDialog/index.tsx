import * as React from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import isMobile from "check-mobile";

type CloseOnTimerParams = {
  timeInMilliseconds: number;
  onClose: () => any;
};

export default function SimpleItemWithDialog(props: {
  children?: React.ReactNode;
  title: string;
  description: string | JSX.Element;
  onMenuItemClick?: () => any;
  customButtons?: React.ReactNode[];
  openAtStart?: boolean;
  disableBackdropClick?: boolean;
  closeOnTimer?: CloseOnTimerParams;
  preventDialogFromOpening?: boolean;
  preventCloseIfTrue?: boolean;
  forceOpen?: boolean;
  onOpen?: () => any;
  onClose?: () => any;
}) {
  const [open, setOpen] = React.useState(
    props.openAtStart || props.forceOpen || false
  );
  const [closeTimeout, setCloseTimeout] = React.useState<
    NodeJS.Timeout | undefined
  >();

  React.useEffect(() => {
    if (!open) {
      return;
    }
    if (props.onOpen != null) {
      props.onOpen();
    }
  }, [open]);

  React.useEffect(() => {
    if (props.forceOpen != null) {
      setOpen(props.forceOpen);
    }
  }, [props.forceOpen]);

  const handleMenuItemClick = () => {
    // Don't allow dialog to open if we are being told to prevent
    if (props.preventDialogFromOpening) {
      return;
    }
    if (props.forceOpen == null) {
      setOpen(true);
    }
    if (props.onMenuItemClick != null) {
      props.onMenuItemClick();
    }
  };

  const handleOnClose = () => {
    if (props.preventCloseIfTrue) {
      return;
    }
    // Make sure to clear the timeout so that
    // the timeout handler does not get called as
    // the user manually dismissed the dialog
    if (closeTimeout != null) {
      clearTimeout(closeTimeout);
    }
    if (props.forceOpen == null) {
      setOpen(false);
    }
    if (props.onClose != null) {
      props.onClose();
    }
  };

  React.useEffect(() => {
    if (props.closeOnTimer == null) {
      return;
    }
    setCloseTimeout(
      setTimeout(
        props.closeOnTimer.onClose,
        props.closeOnTimer.timeInMilliseconds
      )
    );
  }, []);

  return (
    <div>
      {props.children != null && (
        <div onClick={handleMenuItemClick}>{props.children}</div>
      )}
      <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        open={open}
        onClose={handleOnClose}
        disableBackdropClick={props.disableBackdropClick || false}
        fullScreen={isMobile()}
      >
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>
          {typeof props.description === "string" ? (
            <Typography>{props.description}</Typography>
          ) : (
            props.description
          )}
        </DialogContent>
        <DialogActions>
          {props.customButtons == null ? (
            <Button onClick={handleOnClose} color="primary">
              Done
            </Button>
          ) : (
            props.customButtons.map((btn) => (
              <div onClick={handleOnClose}>{btn}</div>
            ))
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
