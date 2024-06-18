import { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";

import Error from "./pages/Error";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import History from "./pages/History/History";
import Standings from "./pages/Standings/Standings";
import DriverProfile from "./pages/Profiles/DriverProfile";
import TeamProfile from "./pages/Profiles/TeamProfile";

import "./App.scss";

const DEFAULT_THEME = {
  color: "#f5f5f5",
  backgroundColor: "#222",
};

const DEFAULT_HISTORY = {
  year: 2024,
  race: 1,
};

function App() {
  const [theme, setTheme] = useState(DEFAULT_THEME);
  const [history, setHistory] = useState(DEFAULT_HISTORY);

  return (
    <div className="App" style={theme}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings setTheme={setTheme} />} />
          <Route path="/standings" element={<Standings />} />
          <Route
            path="/history"
            element={<History history={history} setHistory={setHistory} />}
          />
          <Route path="/p" element={<Outlet />}>
            <Route path="d/:id" element={<DriverProfile />} />
            <Route path="t/:id" element={<TeamProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
