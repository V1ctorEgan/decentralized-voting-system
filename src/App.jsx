import "./App.css";
import { LandingPage } from "./LandingPage";
import { Route, Routes } from "react-router-dom";
import Dashboard from "././components/pages/Layout.jsx";
import DashboardHome from "././components/pages/viewDash.jsx";
import CreateElection from "././components/pages/CreateElection.jsx";
import Results from "././components/pages/Results.jsx";
import Settings from "././components/pages/Settings.jsx";

function App() {
  return (
    <div>
      <div className="">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/register" element={<AuthPage />} /> */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardHome />} />
            <Route path="home" element={<DashboardHome />} />
            <Route path="create-election" element={<CreateElection />} />
            <Route path="results" element={<Results />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
