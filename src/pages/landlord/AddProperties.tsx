import React, { useEffect } from "react";
import AddPropertyForm from "../../components/landlord/AddPropertyForm";
import { BackArrow } from "../../components/icons";
import { useNavigate } from "react-router-dom";

const AddProperties: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "RentEase | Add Property"
  },[])

  return (
    <>
      <div className="px-4 py-6 md:py-14">
        <div className="flex items-center gap-5">
        <div onClick={() => navigate(-1)} className="bg-blue-100 p-1 w-10 mb-4 cursor-pointer rounded-full text-blue-500 hover:bg-blue-200">
          <BackArrow />
        </div>
        <div className="text-xs text-gray-400 flex items-center justify-between -mt-4">
          <p>Landlord &gt; Properties &gt; Add Property </p>
        </div>
        </div>
        <AddPropertyForm />
      </div>
    </>
  );
};

export default AddProperties;
