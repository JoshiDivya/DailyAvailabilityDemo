import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

export default function FormDialog({dataArr,handleSave}) {
  const [open, setOpen] = React.useState(false);
  // const {slot1,slot2} = dataArr;
console.log(dataArr);
  const count = dataArr.length;
  const [task1,setTask1] = React.useState(count>0 ? dataArr[0].task :"");
  const [task2,setTask2] = React.useState(count>1 ? dataArr[1].task : '');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSaveData=()=>{
    dataArr[0].task = task1;
    dataArr[1].task = task2;
    window.alert(dataArr[0].task+" "+ dataArr[1].task);
    setOpen(false);
  }

  return (
    <div>
      <ModeEditIcon style={{cursor:'pointer'}} onClick={handleClickOpen}/>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Please add note what you are doing during this time slots.
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="task1"
            onChange={(e)=>setTask1(e.target.value)}
            label={`Task for ${dataArr[0].from} - ${dataArr[0].to}`}
            value={task1}
            type="text"
            fullWidth
            variant="outlined"
          />
          {count> 1 &&  <TextField
            autoFocus
            margin="dense"
            id="task2"
            label={`Task for ${dataArr[1].from} - ${dataArr[1].to}`}
            value={task2}
            onChange={(e)=>setTask2(e.target.value)}
            type="text"
            fullWidth
            variant="outlined"
          /> }
           
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSaveData}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}