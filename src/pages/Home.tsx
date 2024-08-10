import React from "react";
import {
  Breadcrumb,
  Filter,
  SearchResult,
  PropertyCard,
} from "../components/home";

const Home: React.FC = () => {
  return (
    <div className="w-full px-4 xl:px-36">
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
