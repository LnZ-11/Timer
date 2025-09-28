'use client'

import TimerSetter from "./components/timer"
import Counter from "./components/counter"
import { useTimerList } from "./stores/useTimerList"
import { motion } from "motion/react"


export default function Home(){
    const { timers } = useTimerList();
    const { resetTimers } = useTimerList()
  return(
    <main>
      <div className="flex flex-col gap-[50px] w-full h-screen text-center items-center bg-base-100"> 
        <h1>Timer App</h1>
        <TimerSetter />
        <div className="flex flex-row justify-around items-center flex-wrap gap-[100px] w-1/2">
          {timers.map((timer) => (
            <motion.div 
            key={timer.id}
            viewport={{ once: true }}
            initial={{ translateY:50, opacity:0 }} 
            animate={{ translateY:0, opacity:1 }} 
            transition={{ duration: 0.5, delay: 0.1 }}
            className={""}
            >
            <Counter
            id={timer.id}
            hours={timer.hours}
            minutes={timer.minutes}
            seconds={timer.seconds}
            />
            </motion.div>
          ))}
        </div>
      <button className="btn btn-primary btn-lg rounded-selector" onClick={resetTimers}>Clear All</button>
      </div>
    </main>
  )
}