import React, { useEffect } from "react";
import { BackArrow } from "../../components/icons";
import { useNavigate } from "react-router-dom";

const TenantDetails: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "RentEase | Tenant Profile";
  }, []);
  return (
    <section className="container mx-auto px-4 py-6 md:py-14">
      <div className="flex items-center justify-start gap-5  ">
        <div
          onClick={() => navigate(-1)}
          className="bg-blue-100 p-1 w-10 mb-4 cursor-pointer rounded-full text-blue-500 hover:bg-blue-200"
        >
          <BackArrow />
        </div>
        <div className="text-xs text-gray-400 flex items-center justify-between -mt-4">
          <p>Landlord &gt; Tenants &gt; Amrit Raj </p>
        </div>
      </div>
      {/* SubHeader */}
      <div className="flex items-center flex-col md:flex-row justify-between gap-7">
        <div className="flex items-center justify-center mt-4 md:mt-0 md:justify-start">
          <div className="flex items-center gap-3">
            <div
              className="border-blue-400 bg-[#fff8f9] w-[80px] h-[80px] rounded-[50%]"
              style={{
                borderWidth: "4px",
                borderStyle: "solid",
              }}
            >
              <img
                src="https://api.dicebear.com/7.x/open-peeps/svg?seed=Lucy"
                width={30}
                alt="avatar"
                height={30}
                className="w-[100%] h-[100%] rounded-[50%]"
              />
            </div>
            <div className="flex items-start flex-col">
              <h3 className="font-bold text-[20px]">Amrit Raj</h3>
              <span className="text-sm">@rajamrit_15</span>

              <span className="text-[12px]">
                {"Devariya" +
                  ", " +
                  "Jehanabad" +
                  ", " +
                  "804408" +
                  ", " +
                  "Bihar"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Details */}
      <div className="flex flex-col lg:flex-row gap-10 p-8 mt-4 bg-gray-50">
        {/* Left Section - Property Information */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
          <p className="text-sm text-gray-600 mb-4">
            Tenant personal Information.
          </p>
          <div className="space-y-4">
            <div>
              <span className="block text-sm font-medium text-gray-600">
                Full Name:
              </span>
              <span className="text-gray-800 font-medium">Amrit Raj</span>
            </div>
            <div>
              <span className="block text-sm font-medium text-gray-600">
                Address:
              </span>
              <span className="text-gray-800 font-medium">
                Devariya, Jehanabad, 804404, Bihar
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <span className="block text-sm font-medium text-gray-600">
                  City:
                </span>
                <span className="text-gray-800 font-medium">Jehanabad</span>
              </div>
              <div>
                <span className="block text-sm font-medium text-gray-600">
                  Pincode:
                </span>
                <span className="text-gray-800 font-medium">804404</span>
              </div>
              <div>
                <span className="block text-sm font-medium text-gray-600">
                  State:
                </span>
                <span className="text-gray-800 font-medium">Bihar</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="block text-sm font-medium text-gray-600">
                  Email:
                </span>
                <span className="text-gray-800 font-medium">
                  rajamrit_15@example.com
                </span>
              </div>
              <div>
                <span className="block text-sm font-medium text-gray-600">
                  Phone:
                </span>
                <span className="text-gray-800 font-medium">
                  +91-1234567890
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Occupation Details */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-2">Occupation Details</h2>
          <p className="text-sm text-gray-600 mb-4">
            This information will be displayed publicly, so ensure it is
            accurate.
          </p>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="block text-sm font-medium text-gray-600">
                  Institution Name:
                </span>
                <span className="text-gray-800 font-medium ">
                  ABC Corporation
                </span>
              </div>
              <div>
                <span className="block text-sm font-medium text-gray-600">
                  Occupation:
                </span>
                <span className="text-gray-800 font-medium ">
                  Software Developer
                </span>
              </div>
            </div>

            <div>
              <span className="block text-sm font-medium text-gray-600">
                Institution Address:
              </span>
              <span className="text-gray-800 font-medium ">
                123 Street, City, State, Pincode
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenantDetails;
