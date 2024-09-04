import { Outlet } from "react-router-dom";
import Sidebar from "../../components/shared/sidebar/Sidebar";
import Headers from "../../components/shared/sidebar/Headers";

const TenantLayout: React.FC = () => {
  return (
    <>
      <Sidebar profile="tenant">
        <Headers />
        <Outlet />
      </Sidebar>
    </>
  );
};

export default TenantLayout;
