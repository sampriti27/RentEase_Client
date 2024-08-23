import React from "react";
import Navbar from "./components/shared/navbar/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { AddProperties, LandlordDashboard, LandlordLayout, LandlordProfile, LandlordProperties, LandlordTenants } from "./pages/landlord";

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
          <Route path=":id" element={<LandlordProfile />} />
          <Route path="properties" element={<LandlordProperties />} />
          <Route path="tenants" element={<LandlordTenants />} />
          <Route path="add-property" element={<AddProperties />} />
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
