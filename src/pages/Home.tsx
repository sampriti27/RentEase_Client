import React, { useEffect, useState } from "react";
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
import PropertyCardLoader from "../components/loader/PropertyCardLoader";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import notFound from "../assets/NotFound.png";
import { selectPlace } from "../store/slices/filterSlice";

const Home: React.FC = () => {
  const [properties, setProperties] = useState<PropertyDetails[]>();
  const filterParams = useSelector(
    (state: RootState) => state.filter.filterparams
  );
  const place = useSelector(selectPlace);
  const getValidFilterParams = (params: typeof filterParams) => {
    return Object.fromEntries(
      Object.entries(params).filter(([key, value]) => {
        console.log(key);
        if (Array.isArray(value)) {
          return value.length > 0 && value[0] !== "";
        }
        return value !== "" && value !== 0;
      })
    );
  };

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["allProperties"],
    retry: 3,
    queryFn: async (): Promise<AxiosResponse<APIResponse<PropertyDetails>>> => {
      const validParams = getValidFilterParams(filterParams);
      return await getAllProperties(validParams);
    },
    enabled: false, // Prevent automatic fetching on component mount
  });

  useEffect(() => {
    refetch(); // Manually refetch whenever filterParams change
  }, [filterParams, refetch]);

  useEffect(() => {
    setProperties(data?.data.data as PropertyDetails[]);
  }, [data]);

  useEffect(() => {
    document.title = `Properties in ${place} | Rentease`;
  }, [place]);

  return (
    <div className="w-full px-1 md:px-3 xl:px-36">
      <Breadcrumb />
      <div className="w-full  flex gap-4">
        <div className="hidden lg:block  md:w-1/4 mb-12">
          <Filter />
        </div>
        <div className="w-full lg:w-3/4 px-2 pt-2">
          <SearchResult result={properties as PropertyDetails[]} />

          {isLoading ? (
            <div className="w-full h-[calc(100vh-160px)] mt-4 flex flex-col gap-6">
              {/* Skeleton loader for PropertyCards */}
              {[...Array(3)].map((_, index) => (
                <PropertyCardLoader key={index} />
              ))}
            </div>
          ) : (
            <div className="w-full h-[calc(100vh-160px)] mt-4">
              {(properties?.length as number) > 0 ? (
                properties?.map((item: PropertyDetails) => (
                  <PropertyCard key={item.propertyId} item={item} />
                ))
              ) : (
                <div className="w-full flex flex-col items-center justify-center">
                  <img
                    src={notFound}
                    alt="not-found image"
                    className="h-36 sm:h-56 opacity-75"
                  />
                  <p className="text-gray-700 font-medium text-sm sm:text-xl">
                    OOPs! No Property Found with the given filters
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
