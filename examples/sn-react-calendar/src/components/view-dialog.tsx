import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import Slide from '@material-ui/core/Slide'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { TransitionProps } from '@material-ui/core/transitions'
import React from 'react'
import CalendarEvent from '../CalendarEvent-type'
import { ViewDialogBody } from './view-dialog-body'

const Transition = React.forwardRef(
  (props: TransitionProps & { children?: React.ReactElement<any, any> }, ref: React.Ref<unknown>) => {
    return <Slide direction="up" ref={ref} {...props} />
  },
)
Transition.displayName = 'Transition'

export interface DialogProps {
  open: boolean
  content: CalendarEvent
  onClose: (value: boolean) => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dialogcontent: {
      padding: 0,
    },
    buttonDefault: {
      margin: theme.spacing(1),
    },
  }),
)

export const DialogComponent: React.FunctionComponent<DialogProps> = (props) => {
  const classes = useStyles()

  return (
    <Dialog
      open={props.open}
      TransitionComponent={Transition}
      maxWidth={'md'}
      fullWidth={true}
      fullScreen
      aria-labelledby="event-dialog">
      <DialogContent className={classes.dialogcontent}>
        <ViewDialogBody content={props.content} dialogClose={props.onClose} />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.onClose(false)} color="default" className={classes.buttonDefault}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )
}
