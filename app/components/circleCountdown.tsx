import { ReactNode } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function CircleCountdown({totalTime, children}:{totalTime:number, children: ReactNode}) {
  return (
    <CountdownCircleTimer
      isPlaying = {true} 
      isGrowing = {true}
      rotation="counterclockwise"
      strokeWidth={10}
      trailStrokeWidth={5}
      size={300}
      duration={totalTime}
      colors={"#FFA500"}
    >
      {() => 
      <div className="flex flex-col items-center justify-center rounded-full w-[400px]">
        {children}
      </div>
        }
    </CountdownCircleTimer>
  );
}
