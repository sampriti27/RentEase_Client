import { useSelector } from "react-redux";
import Metrics from "../../components/landlord/Metrics";
import Alerts from "../../components/shared/alerts/Alerts";
import RecentTransaction from "../../components/landlord/RecentTransaction";
import { useEffect } from "react";

const LandlordDashboard: React.FC = () => {
  const { isUserActivated } = useSelector((state:any) => state.auth);

  useEffect(() => {
    document.title = "RentEase | Dashboard"
  },[])

  return (
    <>
      {!isUserActivated && <Alerts />}
      <Metrics />
      <RecentTransaction />
    </>
  );
};

export default LandlordDashboard;
