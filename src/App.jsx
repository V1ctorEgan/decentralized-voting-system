import "./App.css";
import { LandingPage } from "./LandingPage";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./(Dashboard)/Layout.jsx";

function App() {
  return (
    <div>
      <div className="">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/register" element={<AuthPage />} /> */}
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

// { path: "/register", element: <AuthPage /> },
