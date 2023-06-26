import { Slider, Typography } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FormDialog from "./Dialog";

import { makeStyles } from "@mui/styles";

const mark = [
  { value: 0, label: "0" },

  { value: 6, label: "6" },

  { value: 12, label: "12" },

  { value: 18, label: "18" },

  { value: 24, label: "24" },
];

const useStyles = makeStyles((theme) => ({
  slider: {
    color: "yellow",
    flex: 3,
    width: "100%",
  },
  singleSlider: {
    width: "100%",
    zIndex:1,
    position:'absolute',
    color: "yellow",
  },
  twoSlider: {
    zIndex: 2,
    width: "100%",
  },
  addButton: {
    cursor: "pointer",
  },
  grid2: {
    flex: 3,
    position: "relative",
  },
  grid1: {
    flex: 1,
  },
  flex: {
    display: "flex",
  },
}));
function valuetext(value) {
  return `${value}`;
}

const SliderComponent = (props) => {
  const { day, timeSlots } = props.dailydata;
  const noOfSlots = timeSlots.length;
  const { task1, setTask1 } = useState(timeSlots[0].task);
  const { task2, setTask2 } = useState(noOfSlots > 1 ? timeSlots[1].task : "");
  const [slot2, setSlot2] = useState(
    noOfSlots > 1 ? [timeSlots[1].from, timeSlots[1].to] : [21, 23]
  );
  const [slot1, setSlot1] = useState([timeSlots[0].from, timeSlots[0].to]);

  const [isTwo, setIsTwo] = useState(noOfSlots > 1 ? true : false);
  const classes = useStyles();

  const handleSlot1Change=(e,newV)=>{
setSlot1(newV);
timeSlots[0].from = newV[0];
timeSlots[0].to= newV[1]; 
  }
  const handleSlot2Change=(e,newV)=>{
setSlot2(newV);
timeSlots[1].from = newV[0];
timeSlots[1].to= newV[1]; 
  }

  const handleSaveTask = (task) => {
    console.log(`successfully saved ${task}`);
  };
  return (
    <div
      style={{
        display: "flex",
        marginTop: "50px",
        alignItems: "center",
        justifyContent: "center",
        justifyItems: "center",
      }}
    >
      <FormDialog dataArr={timeSlots} handleSave={handleSaveTask} />
      <Typography style={{ fontSize: "1rem", marginLeft: "10px" }} variant="h6">
        <span>{day}</span>
      </Typography>
      <div className={classes.grid2}>
        <div className={classes.singleSlider}>
          <Slider
          max={24}
            step={1}
            value={slot1}
            onChange={handleSlot1Change}
            marks={mark}
            valueLabelDisplay="on"
          ></Slider>
        </div>
        {isTwo && (
          <div className={classes.twoSlider}>
            <Slider
            max={24}
              step={1}
              value={slot2}
              onChange={handleSlot2Change}
              marks={mark}
              valueLabelDisplay="on"
            ></Slider>
          </div>
        )}
      </div>

      {!isTwo ? (
        <AddIcon onClick={() => {setIsTwo(true); setSlot2([timeSlots[1].from, timeSlots[1].to])}} style={{ cursor: "pointer" }} />
      ) : (
        <RemoveIcon
          onClick={() => {setIsTwo(false); setSlot2([]);}}
          style={{ cursor: "pointer" }}
        ></RemoveIcon>
      )}
    </div>
  );
};

export default SliderComponent;


