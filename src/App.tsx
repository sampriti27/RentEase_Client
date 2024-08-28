import { useState } from "react";
import Navbar from "./components/shared/navbar/Navbar";
import Home from "./pages/Home";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { AddProperties, LandlordDashboard, LandlordLayout, LandlordProfile, LandlordProperties, LandlordTenants, SingleProperty } from "./pages/landlord";
import Layout from "./components/auth/Layout";
import PropertyDetails from "./pages/PropertyDetails";

function App() {
  return (
    <Router>
      <Routes>
        {/* Common Routes with Navbar */}
        <Route element={<CommonLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/properties/:id" element={<PropertyDetails />} />
        </Route>

        {/* Landlord Routes with Sidebar */}
        <Route path="/profile/landlord" element={<LandlordLayout />}>
          <Route index element={<LandlordDashboard />} />{" "}
          {/* Default to Dashboard */}
          <Route path=":id" element={<LandlordProfile />} />
          <Route path="properties" element={<LandlordProperties />} />
          <Route path="properties/:propertyId" element={<SingleProperty />} />
          <Route path="tenants" element={<LandlordTenants />} />
          <Route path="add-property" element={<AddProperties />} />
        </Route>
      </Routes>
    </Router>
  );
}

// Layout for routes that require a Navbar
const CommonLayout: React.FC = () => {
  const [openAuthModal, setOpenAuthModal] = useState<boolean>(false);
  return (
    <div>
      <Navbar
        openAuthModal={openAuthModal}
        setOpenAuthModal={setOpenAuthModal}
      />
      <Outlet /> {/* Renders the child routes */}
      {openAuthModal && (
        <div className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-70 z-40">
          <Layout
            openAuthModal={openAuthModal}
            setOpenAuthModal={setOpenAuthModal}
          />
        </div>
      )}
    </div>
  );
};

export default App;
