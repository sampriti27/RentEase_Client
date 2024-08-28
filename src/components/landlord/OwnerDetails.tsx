import React from "react";
import ownerImg from "../../assets/images/owner_pnava.png";
import CrystalButton from "../shared/buttons/CrystalButton";

const OwnerDetails: React.FC = () => {
  return (
    <>
      <div className="text-gray-700">
        <p className=" font-medium text-lg">Owner Details</p>
        <div className="flex items-stretch mt-4 gap-4">
          <div className=" h-full">
            <img
              src={ownerImg}
              alt="owner-image"
              width={150}
              className="h-full object-cover"
            />
          </div>
          <div className="flex flex-col  justify-between h-[150px] flex-1">
            <div>
              <p className="font-medium">Dusmanta Manna</p>
              <p className="text-gray-400 text-sm">Owner</p>
            </div>
            <div>
              <CrystalButton text="View Phone Number" isDark={true} />
            </div>
          </div>
        </div>
        <div className="text-sky-500 flex items-center mt-4 gap-8">
          <p>Property Listed : 1</p>
          <p>Property Verified : 1</p>
        </div>
        <p className="mt-2">
          <span className="font-medium">Localities : </span> Sonarpur
        </p>
      </div>
    </>
  );
};

export default OwnerDetails;
