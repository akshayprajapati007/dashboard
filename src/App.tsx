import { CssBaseline, ThemeProvider } from "@mui/material"
import theme from "./configs/theme"
import Dashboard from "./components/Dashboard"
import "./App.css"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  )
}

export default App
