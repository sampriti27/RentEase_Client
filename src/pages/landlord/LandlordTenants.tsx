
import { useEffect } from "react";
import TenantTable from "../../components/landlord/TenantTable";

const LandlordTenants: React.FC = () => {

  useEffect(() => {
    document.title = "RentEase | Tenants"
  },[])

  return (
    <div className="px-4 py-6 md:py-14">
      <TenantTable />
    </div>
  );
};

export default LandlordTenants;
