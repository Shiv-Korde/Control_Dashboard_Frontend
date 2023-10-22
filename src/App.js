import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import ActiveCard from "components/ActiveCard";
import InActiveCard from "components/InActiveCard";
import { GridView } from "@mui/icons-material";
import GridCard from "components/GridCard";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/active" element={<ActiveCard />} />
              <Route path="/inactive" element={<InActiveCard />} />
              <Route path="/card view" element={<GridCard />} />
              <Route path="/list view" element={<Navigate to="/dashboard" replace />} />
              <Route path="/admin" element={<Navigate to="/" replace />} />
              <Route path="/performance" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
