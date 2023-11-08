
import { create } from 'zustand'


type Ilog = {
    note:string;
    hour:number;
    date: Date;
};

interface LogState {
    log:Ilog
    setLog: (log: Ilog) => void;
}

export const useLogStore = create<LogState>()((set) => ({
    log: {
        note:"",
        hour:0,
        date: new Date(),
    },
    setLog: (log:Ilog) => set((state) => ({log: {...state.log, ...log}}))
}))