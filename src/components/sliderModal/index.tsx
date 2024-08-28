import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Grid } from "@mui/material";

export default function FullScreenDialog({
  open,
  onClose,
  content,
  direction,
  className,
  PaperProps,
  dialogClassName,
}: any) {
  const [transitionApplied, setTransitionApplied] = React.useState(false);

  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>
  ) {
    if (!transitionApplied) {
      setTransitionApplied(true);
      return (
        <Slide
          direction={direction}
          className={className}
          ref={ref}
          {...props}
        />
      );
    }

    return <>{props.children}</>;
  });
  return (
    <Grid>
      <Dialog
        PaperProps={PaperProps}
        fullScreen
        open={open}
        className={dialogClassName}
        onClose={() => {
          onClose();

          setTransitionApplied(false);
        }}
        TransitionComponent={Transition}
      >
        {content}
      </Dialog>
    </Grid>
  );
}