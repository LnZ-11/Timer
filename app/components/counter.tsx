"use client";
import { useEffect, useState } from "react";
import { useTimerList } from "../stores/useTimerList";
import { BiSolidBellOff } from "react-icons/bi";
import { BiSolidBell } from "react-icons/bi";
import CircleCountdown from "./circleCountdown";
import { useSound } from "use-sound";



export default function Counter({ id, hours, minutes, seconds }: { id: string, hours: number, minutes: number, seconds: number }) {

  const totalTime = seconds + minutes*60 + hours*3600 
  const [time, setTime] = useState({ hours, minutes, seconds });
  const { removeTimer } = useTimerList();
  const [endingHour] = useState(()=>{ return Math.floor((((parseInt(new Date().getHours().toString())*3600+parseInt(new Date().getMinutes().toString())*60+parseInt(new Date().getSeconds().toString()))+ totalTime)%86400)/3600)});
  const [endingMinutes] = useState(()=>{ return Math.floor(((parseInt(new Date().getMinutes().toString())*60+parseInt(new Date().getSeconds().toString())+ totalTime)%3600)/60)});
  const [alarm, setAlarm] = useState(true);
  const [play] = useSound("/sound/alarm.wav");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;
  
        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(interval);
          return prev;
        }
  
        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          minutes -= 1;
          seconds = 59;
        } else if (hours > 0) {
          hours -= 1;
          minutes = 59;
          seconds = 59;
        }
  
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (time.hours === 0 && time.minutes === 0 && time.seconds === 0 && alarm) {
    play();
  }

return (
  <div className="flex flex-col items-center justify-center border-none rounded-full border-base-content w-[200px]">
    <CircleCountdown totalTime={totalTime}>

    <button className="btn btn-sm rounded-box bg-none" onClick={() => removeTimer(id)}>X</button>
    <div className="flex flex-col">
      <div className="flex flex-row items-center">
        <h3 className="text-base">

        {String(endingHour).padStart(2, "0")}
        <span className="mx-2">:</span>
        {String(endingMinutes).padStart(2, "0")} 
        </h3>
        <button className="bg-transparent border-none cursor-pointer" onClick={() => setAlarm(!alarm)}>{alarm ? <BiSolidBell /> : <BiSolidBellOff />}</button>
      </div>
    <div className="flex flex-row items-center justify-center px-[50px] pb-[20px]">
      { time.hours === 0 ? null :(
        <>
          <h1>{String(time.hours).padStart(2, "0")}</h1>
          <span className="mx-2">:</span>
        </>
      )}
      <h1>{String(time.minutes).padStart(2, "0")}</h1>
      <span className="mx-2">:</span>
      <h1>{String(time.seconds).padStart(2, "0")}</h1>
    </div>
      <h5 className="">{hours === 0 ? "" : `${hours} H `}{minutes === 0 ? "" : `${minutes} m `}{seconds === 0 ? "" : `${seconds} s`}</h5>
    </div>
      </CircleCountdown>
  </div>
  );
}
