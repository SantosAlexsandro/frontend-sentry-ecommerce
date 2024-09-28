import { ThemeProvider } from "@mui/material/styles";
import { LightTheme } from "./shared/themes/Light";
import TemporaryDrawer from "./shared/components/left-drawer/left-drawer.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes/index";

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <CssBaseline />
      <Router>
        <TemporaryDrawer>
          <AppRoutes />
        </TemporaryDrawer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
