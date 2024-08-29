import React from "react";
import configuration from "../../assets/images/configurationIcon.png";
import floor from "../../assets/images/floorIcon.png";
import ConfigurationItem from "./ConfigurationItem";
import rent from "../../assets/images/pricingIcon.png";
import address from "../../assets/images/addressIcon.png";
import propertyAge from "../../assets/images/propertyAgeIcon.png";

const ConfigurationCard: React.FC = () => {
  return (
    <div className="bg-gray-50 rounded-lg h-full p-2 md:p-8 grid grid-cols-2">
      {/* ConfigurationItem  */}
      <ConfigurationItem
        imgsrc={configuration}
        title="Configuration"
        content="2 Bedrooms , 1 Bathroom, No Balcony"
      />
      <ConfigurationItem
        imgsrc={floor}
        title="Floor Number"
        content="3rd of 3 Floors"
      />
      <ConfigurationItem
        imgsrc={rent}
        title="Rent"
        content="60 Thousand"
        subcontent="Deposit 60 Thousand"
      />
      <ConfigurationItem
        imgsrc={address}
        title="Address"
        content="Tulshi Apartment"
        subcontent="Chiria bagan, Kolkata North"
      />
      <ConfigurationItem
        imgsrc={propertyAge}
        title="
        Property Age"
        content="1 to 5 Years Old"
      />
    </div>
  );
};

export default ConfigurationCard;
