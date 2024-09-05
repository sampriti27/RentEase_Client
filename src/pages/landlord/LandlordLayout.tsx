import { Outlet } from "react-router-dom";
import Sidebar from "../../components/shared/sidebar/Sidebar";
import Headers from "../../components/shared/sidebar/Headers";

const LandlordLayout: React.FC = () => {
  return (
    <>
      <Sidebar>
        <Headers />
        <Outlet />
      </Sidebar>
    </>
  );
};

export default LandlordLayout;
