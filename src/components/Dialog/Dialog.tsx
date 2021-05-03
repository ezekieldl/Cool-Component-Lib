import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props: any) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (props.location) {
      props.$state.go(props.location);
    }
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{color: '#ffffff', backgroundColor: '#444444'}}>
        Dialog Test
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{props.title || "Component Library Test Dialog"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.message || 'Hello World'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
