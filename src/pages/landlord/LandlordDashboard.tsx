import Alerts from "../../components/shared/alerts/Alerts";

const LandlordDashboard: React.FC = () => {
  // const { userData } = useSelector((state:any) => state.auth);
  return (
    <>
      <Alerts />
      <div className="px-4">This is Dashboard</div>
    </>
  );
};

export default LandlordDashboard;
