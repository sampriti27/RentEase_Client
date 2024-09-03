import { useSelector } from "react-redux";
import Metrics from "../../components/landlord/Metrics";
import Alerts from "../../components/shared/alerts/Alerts";
import RecentTransaction from "../../components/landlord/RecentTransaction";

const LandlordDashboard: React.FC = () => {
  const { isUserActivated } = useSelector((state:any) => state.auth);
  return (
    <>
      {!isUserActivated && <Alerts />}
      <Metrics />
      <RecentTransaction />
    </>
  );
};

export default LandlordDashboard;
