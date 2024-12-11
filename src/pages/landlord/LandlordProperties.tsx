import React, { useEffect } from "react";
import CrystalButton from "../../components/shared/buttons/CrystalButton";
import { PlusIcon } from "../../components/icons";
import PropertyTable from "../../components/landlord/PropertyTable";

const LandlordProperties: React.FC = () => {
  useEffect(() => {
    document.title = "RentEase | Properties"
  },[])
  return (
    <div className="px-4 py-6 md:py-14">
      <CrystalButton
        text="Add Property"
        icon={<PlusIcon isFilter={false} />}
        iconPosition="left"
        color="blue"
        page="/profile/landlord/add-property"
      />
      <div>
        <PropertyTable />
      </div>
    </div>
  );
};

export default LandlordProperties;
