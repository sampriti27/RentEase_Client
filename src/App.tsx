import React from "react";
import Navbar from "./components/shared/navbar/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { LandlordDashboard, LandlordLayout, LandlordProfile, LandlordProperties } from "./pages/landlord";

function App() {
  return (
    <Router>
      <Routes>
        {/* Common Routes with Navbar */}
        <Route element={<CommonLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/properties/:id" element={<Home />} />
        </Route>

        {/* Landlord Routes with Sidebar */}
        <Route path="/profile/landlord" element={<LandlordLayout />}>
          <Route index element={<LandlordDashboard />} /> {/* Default to Dashboard */}
          <Route path="profile" element={<LandlordProfile />} />
          <Route path="properties" element={<LandlordProperties />} />
        </Route>
      </Routes>
    </Router>
  );
}

// Layout for routes that require a Navbar
const CommonLayout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* Renders the child routes */}
    </div>
  );
};



export default App;
