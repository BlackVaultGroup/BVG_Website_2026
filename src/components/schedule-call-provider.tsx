import { createContext, useContext, useState } from "react"
import { ScheduleCallModal } from "@/components/schedule-call-modal"

interface ScheduleCallContextValue {
  openModal: () => void
}

const ScheduleCallContext = createContext<ScheduleCallContextValue>({
  openModal: () => {},
})

export function useScheduleCall() {
  return useContext(ScheduleCallContext)
}

export function ScheduleCallProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <ScheduleCallContext.Provider value={{ openModal: () => setOpen(true) }}>
      {children}
      <ScheduleCallModal open={open} onOpenChange={setOpen} />
    </ScheduleCallContext.Provider>
  )
}
