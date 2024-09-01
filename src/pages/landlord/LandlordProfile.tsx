import { useParams } from "react-router-dom";
import Alerts from "../../components/shared/alerts/Alerts";

const LandlordProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <Alerts />
      <div className="px-4">{id}</div>
    </>
  );
};

export default LandlordProfile;
