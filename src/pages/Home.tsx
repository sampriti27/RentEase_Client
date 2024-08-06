import React from "react";
import {
  Breadcrumb,
  Filter,
  SearchResult,
  PropertyCard,
} from "../components/shared/home";

const Home: React.FC = () => {
  return (
    <div className="h-full w-full  px-48">
      <Breadcrumb />
      <div className="w-full h-screen flex gap-4">
        <div className="w-1/3 border">
          <Filter />
        </div>
        <div className="w-2/3  px-2 pt-2">
          <SearchResult />
          <div className="w-full mt-8">
            <PropertyCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
