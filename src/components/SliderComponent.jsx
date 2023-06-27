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
    zIndex: 1,
    position: "absolute",
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

const SliderComponent = (props) => {
  const [timeSlots, setTimeSlots] = useState(props.slot.timeSlots);
  const  day = props.dayValue;
  console.log("Day",day);

  const noOfSlots = timeSlots?.length || 0;

  const [slot1, setSlot1] = useState([timeSlots[0].from, timeSlots[0].to]);
  const [slot2, setSlot2] = useState(
    timeSlots[1] ? [timeSlots[1].from, timeSlots[1].to] : [21, 23]
  );
  const [isTwo, setIsTwo] = useState(timeSlots[1] ? true : false);
  const classes = useStyles();

  const handleSlot1Change = (e, newV) => {
    setSlot1(newV);
   setTimeSlots((prevTimeSlot)=>{
    const newSlot = [...prevTimeSlot];
    if(newSlot.length>0){
          newSlot[0]={...newSlot[0],from :newV[0],to:newV[1]}                            
    }
    return newSlot;
   })
  };
  const handleSlot2Change = (e, newV) => {
    setSlot2(newV);
    setTimeSlots(prevTimeSlots => {
      const updatedTimeSlots = [...prevTimeSlots];
      if (updatedTimeSlots.length > 1) {
        updatedTimeSlots[1] = { ...updatedTimeSlots[1], from: newV[0], to: newV[1] };
      }
      return updatedTimeSlots;
    });
  };

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
        <AddIcon
          onClick={() => {
            setIsTwo(true);
            setSlot2([21,23]);
          }}
          style={{ cursor: "pointer" }}
        />
      ) : (
        <RemoveIcon
          onClick={() => {
            setIsTwo(false);
            setSlot2([]);
          }}
          style={{ cursor: "pointer" }}
        ></RemoveIcon>
      )}
    </div>
  );
};

export default SliderComponent;
