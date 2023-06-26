import { Typography } from "@mui/material";
import "./App.css";
import SliderComponent from "./components/SliderComponent";
import {styled} from '@emotion/styled'

function App() {

  const currentDate = new Date();
  const next7Days = [];
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  for (let index = 0; index < 7; index++) {
const nextDay = new Date();
nextDay.setDate(currentDate.getDate()+index);
const day = daysOfWeek[nextDay.getDay()]
next7Days.push(day);  
  }

console.log(next7Days);
  const data = [
    {
      day: next7Days[0],
      timeSlots: [
        { from: 7, to: 9, task: '' },
        { from: 3, to: 6, task: '' }
      ]
    },
    {
      day: next7Days[1],
      timeSlots: [
        { from: 7, to: 9, task: '' },
        { from: 15, to: 18, task: '' }
      ]
    },
    {
      day: next7Days[2],
      timeSlots: [
        { from: 11, to: 13, task: '' },
        { from: 19, to: 21, task: '' }
      ]
    },
    {
      day: next7Days[3],
      timeSlots: [
        { from: 7, to: 12, task: '' }
       
      ]
    },
    {
      day: next7Days[4],
      timeSlots: [
        { from: 11, to: 13, task: '' },
        { from: 19, to: 21, task: '' }
      ]
    },
    {
      day: next7Days[5],
      timeSlots: [
        { from: 11, to: 13, task: '' },
        { from: 19, to: 21, task: '' }
      ]
    },
    {
      day: next7Days[6],
      timeSlots: [
        { from: 11, to: 13, task: '' },
        { from: 15, to: 19, task: '' }
      ]
    },
  ];
  

  return (
    <div className="App">
    <div className="box">
    <Typography variant="h5">MY AVAILABILITY FOR THE NEXT 7 DAYS</Typography>
      {data.map((day,i) => {
        return <SliderComponent key={i} dailydata={day} />;
      })}
      </div>
    </div>
  );
}

export default App;
