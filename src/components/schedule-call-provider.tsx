import { createContext, useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
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
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <ScheduleCallContext.Provider value={{ openModal: () => setOpen(true) }}>
      {children}
      <ScheduleCallModal open={open} onOpenChange={setOpen} />
    </ScheduleCallContext.Provider>
  )
}
