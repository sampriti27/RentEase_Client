import React from "react";
import ownerImg from "../../assets/images/owner_pnava.png";
import CrystalButton from "../shared/buttons/CrystalButton";
import { APIResponse, Landlord, PropertyDetails } from "../../types";
import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { getAllPropertyOfLandlord } from "../../http";

interface Props {
  landlord: Landlord;
}

const OwnerDetails: React.FC<Props> = ({ landlord }) => {
  const { data } = useQuery({
    queryKey: ["properties", landlord?.userId],
    retry: 3,
    queryFn: async (): Promise<AxiosResponse<APIResponse<PropertyDetails>>> => {
      return await getAllPropertyOfLandlord(landlord?.userId);
    },
  });

  return (
    <>
      <div className="text-gray-700">
        <p className="font-medium text-md md:text-lg">Owner Details</p>
        <div className="flex items-stretch mt-4 gap-4">
          <div className="h-full">
            <img
              src={ownerImg}
              alt="owner-image"
              width={150}
              className="h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between h-[150px] flex-1">
            <div>
              <p className="font-medium text-sm md:text-lg">
                {landlord?.fullName}
              </p>
              <p className="text-gray-400 text-sm">Owner</p>
            </div>
            <div>
              <CrystalButton text="View Number" isDark={true} />
            </div>
          </div>
        </div>
        <div className="text-sky-500 text-xs sm:text-sm flex items-center mt-4 gap-8">
          <p>Property Listed: {data?.data.data?.length ?? 0}</p>
          <p>Property Verified: {data?.data.data?.length ?? 0}</p>
        </div>
        <p className="mt-2 text-sm md:text-base">
          <span className="font-medium">Localities: </span> {landlord?.state}
        </p>
      </div>
    </>
  );
};

export default OwnerDetails;
