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
import { AllPropertyAPIResponse } from "../types";


const Home: React.FC = () => {


  const { isError, data: properties, error } = useQuery({
    queryKey: ["properties"],
    retry: 3,
    queryFn: async (): Promise<AxiosResponse<AllPropertyAPIResponse>> => { // Function to fetch rooms data
      return await getAllProperties();
    },
  });


  console.log(properties);
  return (
    <div className="w-full px-1 md:px-3 xl:px-36">
      <Breadcrumb />
      <div className="w-full  flex gap-4">
        <div className="hidden lg:block  md:w-1/4 mb-12">
          <Filter />
        </div>
        <div className="w-full lg:w-3/4 px-2 pt-2">
          <SearchResult />
          <div className="w-full h-[calc(100vh-160px)] mt-4">
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
