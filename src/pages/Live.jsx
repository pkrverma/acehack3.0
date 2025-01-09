import React from "react";
import CountdownTimer from "../components/Timer";
import wall from "../wall.html?special";

// TODO: update the schedule
const schedule = [
  ["2024-04-06T09:30:00", "Check-in Starts"],
  ["2024-04-06T11:00:00", "Opening Ceremony"],
  ["2024-04-06T11:30:00", "Rajasthan Police Session"],
  ["2024-04-06T12:30:00", "Hackathon Begins!"],
  ["2024-04-06T13:30:00", "Lunch"],
  ["2024-04-06T14:30:00", "Nordek Session"],
  ["2024-04-06T15:30:00", "Orkes Session"],
  ["2024-04-06T16:10:00", "HackQuest Session"],
  ["2024-04-06T18:30:00", "FunZone Opens"],
  ["2024-04-06T19:30:00", "Tech Talk by Sunchit Dudeja"],
  ["2024-04-06T20:30:00", "Dinner + AceHack 3.0 UnPlugged"],
  ["2024-04-06T23:30:00", "Mentoring Round 1"],
  ["2024-04-07T02:30:00", "Midnight Games"],
  ["2024-04-07T08:00:00", "Pulse Pump"],
  ["2024-04-07T08:30:00", "Breakfast"],
  ["2024-04-07T09:30:00", "Mentoring Round 2"],
  ["2024-04-07T13:00:00", "Project Submission (Devfolio)"],
  ["2024-04-07T13:30:00", "Lunch"],
  ["2024-04-07T14:30:00", "Judging Starts"],
  ["2024-04-07T18:00:00", "Closing Ceremony"],
  ["2024-04-07T19:00:00", "Bus Return"],
];

const Live = () => {
  const [time, setTime] = React.useState(new Date());
  const [currentEvent, setCurrentEvent] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    for (let i = 0; i < schedule.length; i++) {
      let d = new Date(schedule[i][0]).getTime();
      let t = time.getTime();
      if (t < d) {
        setCurrentEvent(i - 1);
        break;
      }
    }
  }, [time]);

  return (
    <div
      id="live"
      className="py-12 bg-gray-900/30 relative scroll-smooth w-full"
    >
      <div className="flex flex-col md:flex-row text-lg text-white gap-10 mx-10 justify-between">
        { /* <div className="flex flex-col items-start">
          <p>Hacking Starts In</p>
          <h1 className="font-semibold pb-12 grad-text">
            <CountdownTimer targetDate={new Date("2024-04-06T12:00:00")} />
          </h1>
  </div> */ }
        {/* Uncomment when live */}
        <div className="flex flex-col items-start">
          <p>Hacking Ends In</p>
          <h1 className="font-semibold pb-12 grad-text">
            <CountdownTimer targetDate={new Date("2024-04-07T13:00:00")} />
          </h1>
          <p>Happening Now</p>
          <h1 className="text-5xl font-bold pt-2 pb-12 grad-text">
            {schedule[currentEvent][1]}
          </h1>
          <p>Next</p>
          <div className="flex flex-row items-center">
            <div className="text-5xl font-bold pt-2 pb-2 pr-4 grad-text border-0 md:border-r-2 border-gray-300">
              {schedule[currentEvent + 1][1]}
            </div>
            <div className="text-5xl font-semibold pt-2 pb-2 pl-4">
              {schedule[currentEvent + 1][0].slice(11, 16)}
            </div>
          </div>
        </div>
        <div className="w-full md:w-4/6">
          <iframe
            className="w-full h-[75vh]"
            allowfullscreen
            id="wallsio-iframe"
            src={wall}
            loading="lazy"
            title="My social wall"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Live;

