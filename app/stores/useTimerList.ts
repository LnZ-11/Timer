import { create } from "zustand";

interface Timer {
  id: string;
  hours: number;
  minutes: number;
  seconds: number;
}

interface TimerListState {
  hours: number;
  minutes: number;
  seconds: number;
  timers: Timer[];
  addTimer: (hours: number, minutes: number, seconds: number) => void;
  resetTimer: () => void;
  removeTimer: (id: string) => void;
  resetTimers: () => void;
}

export const useTimerList = create<TimerListState>((set) => ({
  hours: 0,
  minutes: 0,
  seconds: 0,
  timers: [],

  addTimer: (hours, minutes, seconds) =>
    set((state) => ({
      timers: [
        ...state.timers,
        {
          id: crypto.randomUUID(),
          hours,
          minutes,
          seconds,
        },
      ],
    })),

    removeTimer: (id : string) =>
        set((state) => ({
          timers: state.timers.filter((t) => t.id !== id),
        })),
    
        resetTimer: () => set({ hours: 0, minutes: 0, seconds: 0 }),
        resetTimers: () => set({ timers: [], hours: 0, minutes: 0, seconds: 0 }),
}));
