import "./App.css";
import { LandingPage } from "./LandingPage";
import { Route, Routes } from "react-router-dom";
<<<<<<< Updated upstream
import Dashboard from "./(Dashboard)/Layout.jsx";
=======
import Dashboard from "././components/pages/Layout.jsx";
import DashboardHome from "././components/pages/viewDash.jsx";
import CreateElection from "././components/pages/CreateElection.jsx";
import Results from "././components/pages/Results.jsx";
import Settings from "././components/pages/Settings.jsx";
>>>>>>> Stashed changes
import { AuthPage } from "./AuthPage.jsx";

function App() {
  return (
    <div>
      <div className="">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<AuthPage />} />
<<<<<<< Updated upstream
          <Route path="/Dashboard" element={<Dashboard />} />
=======

          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardHome />} />
            <Route path="home" element={<DashboardHome />} />
            <Route path="create-election" element={<CreateElection />} />
            <Route path="results" element={<Results />} />
            <Route path="settings" element={<Settings />} />
          </Route>
>>>>>>> Stashed changes
        </Routes>
      </div>
    </div>
  );
}

export default App;

// { path: "/register", element: <AuthPage /> },
