"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLogStore } from "@/store/index"
import { GrAdd } from "react-icons/gr"
import { DatePicker } from "./DatePicker"
import { useToast } from "@/components/ui/use-toast"
import dayjs from "dayjs"


export function NewLog() {
  const log = useLogStore((state) => state.log)
  const setLog = useLogStore((state) => state.setLog)
  const setLogs = useLogStore((state) => state.setLogs)
  const logs = useLogStore((state) => state.logs)

  const { toast } = useToast()

  /*Event Handler*/

  const closeDialog = () => {
    document.getElementById("close-btn")?.click()
  }
  const validateLog = () => {
    if(!log.date || !log.hour || log.hour ===0){
      throw "시간 또는 날짜가 비어있습니다."
    }else if (log.hour >= 24) {
      throw "유효한 시간을 입력하세요.";
    }
  }

  const submitLog = () => {
    try{
      validateLog()
      setLogs(log, dayjs(log.date).format("YYYY-MM-DD"))
      console.log(logs);
      toast({
        title: "로그 생성 성공",
        description: `${log.hour} in ${log.date.toDateString}`,
      })
      closeDialog()
    } catch (e) {
      toast({
        variant: "destructive",
        title: "로그 생성 실패",
        description: e as string,
      })
    }

  }
  return (
    <Dialog>
      <DialogTrigger asChild>
            <div className="w-full sm:w-72 border-dashed border py-3
            flex items-center justify-center rounded-md cursor-pointer
            hover:border-solid">
                <GrAdd />
            </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Log</DialogTitle>
          <DialogDescription>
            {
                "Remember, time is your most valuable asset-invest it wisely with our Time Log App"
            }
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="date" className="text-right">
                date{""}
                </Label>
                <DatePicker />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="hour" className="text-right">
                hour
                </Label>
                
                <Input id="hour" type="number"
                className="col-span-3"
                value={log.hour}
                onChange={(e) => 
                  setLog({
                    ...log,
                    hour: parseInt(e.target.value)})
                  }
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="Note" className="text-right">
                Note
                </Label>
                <Input
                id="note"
                placeholder="note of the log"
                className="col-span-3"
                value={log.note}
                onChange={(e) => 
                  setLog({
                    ...log,
                    note: (e.target.value)})
                  }
                />
            </div>
        </div>
        <DialogFooter>
          <Button 
            type="submit"
            onClick={submitLog}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
