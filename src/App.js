import { Typography } from "@mui/material";
import "./App.css";
import SliderComponent from "./components/SliderComponent";
import slotData from './data/slotData.json'

function App() {
  const currentDate = new Date();
  const next7Days = [];
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  for (let index = 0; index < 7; index++) {
    const nextDay = new Date();
    nextDay.setDate(currentDate.getDate() + index);
    const day = daysOfWeek[nextDay.getDay()];
    next7Days.push(day);
  }

  return (
    <div className="App">
      <div className="box">
        <Typography variant="h5">
          MY AVAILABILITY FOR THE NEXT 7 DAYS
        </Typography>
        {next7Days.map((day, i) => {
          return <SliderComponent key={i} slot={slotData[i]} dayValue={day} />;
        })}
      </div>
    </div>
  );
}

export default App;
