import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouteProps,
  Outlet,
  Navigate,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/shared/navbar/Navbar";
import Home from "./pages/Home";
import PropertyDetails from "./pages/SinglePropertyDetails";
import FilterComponent from "./components/shared/FilterComponent";
import {
  AddProperties,
  LandlordDashboard,
  LandlordLayout,
  LandlordProfile,
  LandlordProperties,
  LandlordTenants,
  SingleProperty,
  TenantDetails,
} from "./pages/landlord";
import Layout from "./components/auth/Layout";
import { useLoadingWithRefresh } from "./hooks/useLoadingWithRefresh";
import { useSelector } from "react-redux";

function App() {
  const { loading } = useLoadingWithRefresh();

  return loading ? (
    <></>
  ) : (
    <Router>
      <Routes>
        {/* Common Routes with Navbar */}
        <Route element={<CommonLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/properties/:propertyId" element={<PropertyDetails />} />
        </Route>

        {/* Landlord Routes with Sidebar */}
        <Route
          path="/profile/landlord"
          element={
            <LandlordRoutes>
              <LandlordLayout />
            </LandlordRoutes>
          }
        >
          <Route index element={<LandlordDashboard />} />
          {/* Default to Dashboard */}
          <Route path=":id" element={<LandlordProfile />} />
          <Route path="properties" element={<LandlordProperties />} />
          <Route path="properties/:propertyId" element={<SingleProperty />} />
          <Route path="tenants" element={<LandlordTenants />} />
          <Route path="add-property" element={<AddProperties />} />
          <Route path="tenants/:tenantId" element={<TenantDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

// Layout for routes that require a Navbar
const CommonLayout: React.FC = () => {
  const { authModal } = useSelector((state: any) => state.modal);
  const location = useLocation(); // Use useLocation here since it's wrapped by <Router>

  return (
    <div>
      <Navbar />
      {/* Render FilterComponent only on home route */}
      {location.pathname === "/" && <FilterComponent />}
      <Outlet /> {/* Renders the child routes */}
      {authModal && (
        <div className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-70 z-40">
          <Layout />
        </div>
      )}
    </div>
  );
};

const LandlordRoutes: React.FC<RouteProps> = ({ children }) => {
  const { isAuth, role } = useSelector((state: any) => state.auth);
  // Check if user is authenticated and has the "Landlord" role
  if (isAuth && role === "Landlord") {
    // Render children if checks pass
    return <>{children}</>;
  }

  return <Navigate to="/" />;
};

export default App;
