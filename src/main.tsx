import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter } from "react-router-dom"

import "./index.css"
import { AppRoutes } from "./App.tsx"
import { ScheduleCallProvider } from "@/components/schedule-call-provider"

const root = document.getElementById("root")!
const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScheduleCallProvider>
          <AppRoutes />
        </ScheduleCallProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)

// The prerendered HTML is complete for crawlers and no-JS visitors. React takes
// ownership on load so third-party UI components can initialize consistently.
createRoot(root).render(app)
