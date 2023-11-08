
import { create } from 'zustand'


type Ilog = {
    note:string;
    hour:number;
    date: Date;
};

interface LogState {
    log:Ilog;
    logs: {
        [key:string]: Ilog;
    };
    setLog: (log: Ilog) => void;
    setDate: (date:Date) => void;
    setLogs: (log:Ilog, key:string) => void;
}

export const useLogStore = create<LogState>()((set) => ({
    log: {
        note:"",
        hour:0,
        date: new Date(),
    },
    logs: {},

    setLog: (log:Ilog) => set((state) => ({log: {...state.log, ...log}})),
    setDate: (date:Date) => set((state) => ({log: {...state.log, date}})),
    setLogs: (log: Ilog, key:string) => set((state) => ({logs:{...state.logs, [key] : log}})),
}))