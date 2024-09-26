import { ThemeProvider } from "@mui/material/styles";
import { LightTheme } from "./shared/themes/Light";
import TemporaryDrawer from "./shared/components/left-drawer/left-drawer.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import ProductDetails from "./pages/home/ProductDetails.jsx";

const About = () => <h1>About Page</h1>;
const NotFound = () => <h1>404 - Not Found</h1>;

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <CssBaseline />
      <Router>
        {/* Drawer para navegação geral */}
        <TemporaryDrawer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TemporaryDrawer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
