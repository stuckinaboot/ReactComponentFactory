import * as React from "react";

import { Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import isMobile from "check-mobile";
import ColorButton from "mui-color-button";

type Step = { stepName: string; stepContents: React.ReactNode };

export default function StepDialog(props: {
  children: React.ReactNode;
  title: string;
  steps: Step[];
  handleNextBtnPressed: (preNextActiveStep: number) => Promise<string | null>;
  confirmBtnTitle: string;
  onClose?: () => any;
  onConfirm?: () => any;
  disableBackdropClick?: boolean;
  nextBtnColor?: string;
}) {
  const [error, setError] = React.useState("");
  const [activeStep, setActiveStep] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleNextButtonPressed = async () => {
    //add if statement to validate
    const res = await props.handleNextBtnPressed(activeStep);
    if (res != null) {
      setError(res);
      return;
    }
    setError("");
    if (activeStep + 1 >= props.steps.length) {
      // Confirm btn pressed and no error received, so
      // close dialog
      handleClose();
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleClose = () => {
    setOpen(false);
    if (props.onClose == null) {
      return;
    }
    props.onClose();
  };

  const handleBackButtonPressed = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const getStepContent = (stepIndex: number): React.ReactNode =>
    props.steps[stepIndex].stepContents;

  return (
    <div>
      {<div onClick={() => setOpen(true)}>{props.children}</div>}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        // Disable dismissing by clicking on backdrop
        disableBackdropClick={props.disableBackdropClick}
        style={{ overflow: "hidden" }}
        fullScreen={isMobile()}
        PaperProps={{
          style: {
            borderRadius: 20,
            boxShadow: "none",
          },
        }}
      >
        <DialogTitle>{props.title}</DialogTitle>
        <Stepper
          activeStep={activeStep}
          style={{ paddingTop: 0, paddingBottom: 0 }}
        >
          {props.steps.map(({ stepName }) => (
            <Step key={stepName}>
              <StepLabel>{stepName}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {/* Display error if one occurred */}
        {error.length > 0 && (
          <Typography style={{ color: "red", textAlign: "center" }}>
            Error: {error}
          </Typography>
        )}
        <DialogContent style={{ overflow: "hidden" }}>
          <Grid container direction="column" spacing={7}>
            <Grid item>{getStepContent(activeStep)}</Grid>
            <Grid item container justify="flex-end" spacing={2}>
              <Grid item>
                {activeStep === 0 ? (
                  <ColorButton
                    label="Cancel"
                    textColor="black"
                    backgroundColor="transparent"
                    onClick={handleClose}
                  />
                ) : (
                  <ColorButton
                    label="Back"
                    textColor="black"
                    backgroundColor="transparent"
                    onClick={handleBackButtonPressed}
                  />
                )}
              </Grid>
              <Grid item>
                <ColorButton
                  label={
                    activeStep === props.steps.length - 1
                      ? props.confirmBtnTitle
                      : "Next"
                  }
                  textColor="white"
                  backgroundColor={props.nextBtnColor || "#3f51b5"}
                  onClick={handleNextButtonPressed}
                />
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
