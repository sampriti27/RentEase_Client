import React from "react";
import configuration from "../../assets/images/configurationIcon.png";
import floor from "../../assets/images/floorIcon.png";
import ConfigurationItem from "./ConfigurationItem";
import rent from "../../assets/images/pricingIcon.png";
import address from "../../assets/images/addressIcon.png";
import propertyAge from "../../assets/images/propertyAgeIcon.png";

interface Props {
  pConfiguration: string;
  pfloor: string;
  pRent: number;
  pAddress: string;
  pRentAge: string;
  pDeposit: number;
  pName: string;
}

const ConfigurationCard: React.FC<Props> = ({
  pConfiguration,
  pfloor,
  pRent,
  pAddress,
  pRentAge,
  pDeposit,
  pName,
}) => {
  return (
    <div className="bg-gray-50 rounded-lg h-full p-2 md:p-8 grid grid-cols-2">
      {/* ConfigurationItem  */}
      <ConfigurationItem
        imgsrc={configuration}
        title="Configuration"
        content={pConfiguration}
      />
      <ConfigurationItem imgsrc={floor} title="Floor Number" content={pfloor} />
      <ConfigurationItem
        imgsrc={rent}
        title="Rent"
        content={pRent}
        subcontent={pDeposit}
      />
      <ConfigurationItem
        imgsrc={address}
        title="Address"
        content={pName}
        subcontent={pAddress}
      />
      <ConfigurationItem
        imgsrc={propertyAge}
        title="
        Property Age"
        content={pRentAge}
      />
    </div>
  );
};

export default ConfigurationCard;
