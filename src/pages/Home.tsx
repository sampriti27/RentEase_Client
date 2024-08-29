import React from "react";
import {
  Breadcrumb,
  Filter,
  SearchResult,
  PropertyCard,
} from "../components/home";
import { useQuery } from "react-query";
import { getAllProperties } from "../http";
import { AxiosResponse } from "axios";
import { APIResponse, PropertyDetails } from "../types";
import SkeletonLoader from "../components/loader/Skeleton";

const Home: React.FC = () => {
  const { data: properties, isLoading } = useQuery({
    queryKey: ["properties"],
    retry: 3,
    queryFn: async (): Promise<AxiosResponse<APIResponse<PropertyDetails>>> => {
      // Function to fetch rooms data
      return await getAllProperties();
    },
  });

  return (
    <div className="w-full px-1 md:px-3 xl:px-36">
      <Breadcrumb />
      <div className="w-full  flex gap-4">
        <div className="hidden lg:block  md:w-1/4 mb-12">
          <Filter />
        </div>
        <div className="w-full lg:w-3/4 px-2 pt-2">
          <SearchResult />
          {isLoading ? (
            <div className="w-full h-[calc(100vh-160px)] mt-4 flex flex-col gap-6">
              {/* Skeleton loader for PropertyCards */}
              {[...Array(3)].map((_, index) => (
                <SkeletonLoader key={index} />
              ))}
            </div>
          ) : (
            <div className="w-full h-[calc(100vh-160px)] mt-4">
              {properties?.data?.data?.map((item: PropertyDetails) => (
                <PropertyCard key={item.propertyId} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
