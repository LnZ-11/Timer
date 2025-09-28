"use client"
import Digits from "./digits"
import { useTimerList } from "../stores/useTimerList"
import { useState } from "react";

export default function TimerSetter () {
    const { hours, minutes,seconds, addTimer, resetTimer } = useTimerList();
    const [hoursValue, setHoursValue] = useState(hours);
    const [minutesValue, setMinutesValue] = useState(minutes);
    const [secondsValue, setSecondsValue] = useState(seconds);

    const handleReset = () => {
        resetTimer();
        setHoursValue(0);
        setMinutesValue(0);
        setSecondsValue(0);
    }

    const handleStart = () =>{
        addTimer(hoursValue,minutesValue,secondsValue)
        setHoursValue(0);
        setMinutesValue(0);
        setSecondsValue(0);
    }
    return(
        <div className="flex flex-col gap-[10px]">
            
            <div className="flex flex-row gap-[10px] items-center justify-center">
                <div className="rounded-box">
                    <Digits 
                        maxValue={23}
                        value={hoursValue.toString().padStart(2, "0")}
                        onChange={(value) => setHoursValue(parseInt(value))}
                    />
                </div>
                <span className="mx-2">:</span>
                <div className="">
                    <Digits 
                        maxValue={59} 
                        value={minutesValue.toString().padStart(2,'0')} 
                        onChange={(value) => setMinutesValue(parseInt(value))}
                    />
                </div>
                <span className="mx-2">:</span>
                <div className="">
                    <Digits 
                        maxValue={59} 
                        value={secondsValue.toString().padStart(2,'0')} 
                        onChange={(value) => setSecondsValue(parseInt(value))}
                    />
                </div>
            </div>      
            <div className=" flex flex-row gap-[20px] items-center justify-center">
            {
                hoursValue === 0 && minutesValue === 0 && secondsValue === 0 ? (
                    <>
                    <button className="btn btn-disabled rounded-lg btn-lg mt-4 self-start rounded-selector" onClick={handleStart} >Start</button>
                    <button className="btn btn-disabled rounded-lg btn-lg rounded-selector" onClick={handleReset} >Reset</button>
                    </>
                ) : (
                    <>
                    <button className="btn btn-primary rounded-lg btn-lg mt-4 self-start rounded-selector" onClick={handleStart} >Start</button>
                    <button className="btn btn-secondary rounded-lg btn-lg rounded-selector" onClick={handleReset} >Reset</button>
                    </>
                )
            }                
            </div>
        </div>
    )
}