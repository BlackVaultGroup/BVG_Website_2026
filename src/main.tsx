import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"

import "./index.css"
import App from "./App.tsx"
import { ScheduleCallProvider } from "@/components/schedule-call-provider"

const root = document.getElementById("root")!
const app = (
  <StrictMode>
    <HelmetProvider>
      <ScheduleCallProvider>
        <App />
      </ScheduleCallProvider>
    </HelmetProvider>
  </StrictMode>
)

// The prerendered HTML is complete for crawlers and no-JS visitors. React takes
// ownership on load so third-party UI components can initialize consistently.
createRoot(root).render(app)
