import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import theme from "./theme";
import Routes from "./pages/Routes";

function App() {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <NavBar />
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
