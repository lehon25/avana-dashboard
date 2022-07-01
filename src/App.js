import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";


function App() {
  return (
    <div style={{ backgroundColor: "#6e6e6e",height:'210vh' }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/hq" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/agent" element={<Dashboard/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
