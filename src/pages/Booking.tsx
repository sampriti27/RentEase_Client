import React, { useEffect, useState } from "react";
import { BookingDetails, Navbar, PropertyInfo } from "../components/booking";
import { useParams } from "react-router-dom";
import { APIResponse, PropertyDetails } from "../types";
import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { getPropertyById } from "../http";
import SinglePropertyLoader from "../components/loader/SinglePropertyLoader";

const Booking: React.FC = () => {
  const { propertyId } = useParams();
  const [property, setProperty] = useState<PropertyDetails>();

  const { data, isLoading } = useQuery({
    queryKey: ["properties", propertyId],
    retry: 3,
    queryFn: async (): Promise<AxiosResponse<APIResponse<PropertyDetails>>> => {
      return await getPropertyById(propertyId);
    },
  });

  useEffect(() => {
    setProperty(data?.data.data as PropertyDetails);
  }, [data?.data.data]);

  useEffect(() => {
    document.title = `Booking | ${propertyId} `;
  }, []);

  console.log(property);
  return (
    <>
      <Navbar />
      {isLoading ? (
        <SinglePropertyLoader />
      ) : (
        <>
          <PropertyInfo property={property as PropertyDetails} />
          <BookingDetails property={property as PropertyDetails} />
        </>
      )}
    </>
  );
};

export default Booking;
