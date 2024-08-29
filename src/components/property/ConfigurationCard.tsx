import React from "react";
import configuration from "../../assets/images/configurationIcon.png";
import floor from "../../assets/images/floorIcon.png";
import ConfigurationItem from "./ConfigurationItem";
import rent from "../../assets/images/pricingIcon.png";
import address from "../../assets/images/addressIcon.png";
import propertyAge from "../../assets/images/propertyAgeIcon.png";
import { IPropertyDetails } from "../../types";

interface Props {
  details: IPropertyDetails | undefined;
}

const ConfigurationCard: React.FC<Props> = ({ details }) => {
  return (
    <div className="bg-gray-50 rounded-lg h-full md:p-8 grid grid-cols-2">
      {/* ConfigurationItem  */}
      <ConfigurationItem
        imgsrc={configuration}
        title="Configuration"
        content={details?.configuration}
      />
      <ConfigurationItem
        imgsrc={floor}
        title="Floor Number"
        content={details?.floor}
      />
      <ConfigurationItem
        imgsrc={rent}
        title="Rent"
        content={details?.rent}
        subcontent={`Deposit ${details?.deposit}`}
      />
      <ConfigurationItem
        imgsrc={address}
        title="Address"
        content={details?.name}
        subcontent={details?.address}
      />
      <ConfigurationItem
        imgsrc={propertyAge}
        title="
        Property Age"
        content={details?.propertyAge}
      />
    </div>
  );
};

export default ConfigurationCard;
