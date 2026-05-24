import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"

import "./index.css"
import App from "./App.tsx"
import { ScheduleCallProvider } from "@/components/schedule-call-provider"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <ScheduleCallProvider>
        <App />
      </ScheduleCallProvider>
    </HelmetProvider>
  </StrictMode>
)
