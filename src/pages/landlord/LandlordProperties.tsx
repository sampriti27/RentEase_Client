import React from "react";
import CrystalButton from "../../components/shared/buttons/CrystalButton";
import { PlusIcon } from "../../components/icons";
import PropertyTable from "../../components/landlord/PropertyTable";

const LandlordProperties: React.FC = () => {
  return (
    <div className="px-4 py-14">
      <CrystalButton
        text="Add Property"
        icon={<PlusIcon isFilter={false} />}
        iconPosition="left"
        isDark={true}
        page="/profile/landlord/add-property"
      />
      <PropertyTable />
    </div>
  );
};

export default LandlordProperties;
