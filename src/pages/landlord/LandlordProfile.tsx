import { useParams } from "react-router-dom";
import Alerts from "../../components/shared/alerts/Alerts";
import { useSelector } from "react-redux";
import React from "react";
import ImageUploader from "../../components/shared/image-uploader/ImageUploader";
import { EditIcon } from "../../components/icons";

const userData = {
  userId: "bc6e4ca2-2ce5-464a-9c2e-ea008caff877",
  fullName: "Sampriti Mukherjee",
  username: "sam123",
  email: "sam.m@gmail.com",
  photoUrl: "https://via.placeholder.com/150",
  phone: 9999999999,
  address: "Sita Niwas",
  city: "Dhanabad",
  pinCode: "826001",
  state: "Jharkhand",
  role: "Landlord",
  joinedDate: "2024-08-25",
  userActivated: true,
};

const bankDetails = {
  bankName: "XYZ Bank",
  accountNumber: "123456789012",
  ifscCode: "XYZB0001234",
  branch: "Dhanabad Branch",
};

const LandlordProfile: React.FC = () => {
  const { isUserActivated, userData } = useSelector((state: any) => state.auth);
  const { id } = useParams<{ id: string }>();
  const handleImageUpload = (newImages: string[]) => {
    console.log(newImages);
  };

  return (
    <>
      {!isUserActivated && <Alerts />}
      <section className="container mx-auto px-4 py-6 md:py-14">
        {/* SubHeader */}
        <div className="flex items-center flex-col w-[400px] gap-7">
          <div className="flex items-center justify-center mt-4 md:mt-0 md:justify-start w-[100%]">
            <div className="flex items-center gap-3">
              <div
                className={`border-blue-400 bg-[#fff8f9] w-[80px] h-[80px] rounded-[50%]`}
                style={{
                  borderWidth: "4px",
                  borderStyle: "solid",
                }}
              >
                <img
                  src="https://api.dicebear.com/7.x/open-peeps/svg?seed=Bear"
                  width={30}
                  alt="avatar"
                  height={30}
                  className="w-[100%] h-[100%] rounded-[50%]"
                />
              </div>
              <div className="flex items-start flex-col">
                <h3 className="font-bold text-[20px]">Sampriti Mukherjee</h3>
                <span className="text-sm">@{userData.username}</span>
                <span className="text-sm">
                  {userData.address +
                    ", " +
                    userData.city +
                    ", " +
                    userData.pinCode +
                    ", " +
                    userData.state}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 p-8 mt-4 bg-gray-50">
          {/* Left Section - Property Information */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">
              Property Informations
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Please provide a detailed and accurate property address for
              verification purposes.
            </p>
            <div className="flex flex-col lg:flex-row gap-10 bg-gray-50">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={userData.fullName}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={userData.address}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 pr-10"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pt-6">
                    <EditIcon />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={userData.city}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 pr-10"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pt-6">
                      <EditIcon />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700">
                      Pincode
                    </label>
                    <input
                      type="number"
                      name="pinCode"
                      value={userData.pinCode}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 pr-10"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pt-6">
                      <EditIcon />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={userData.state}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 pr-10"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pt-6">
                      <EditIcon />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      value={userData.email}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      type="number"
                      name="phone"
                      value={userData.phone}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 pr-10"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pt-6">
                      <EditIcon />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Update Profile Pic
                  </label>
                  <ImageUploader onImagesUploaded={handleImageUpload} />
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
                >
                  Update
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Personal Information */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">Bank Details</h2>
            <p className="text-sm text-gray-600 mb-4">
              This information will be displayed publicly so share proper
              information.
            </p>

            <div className="space-y-4">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700">
                  Bank Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={bankDetails.bankName}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 pr-10"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pt-6">
                  <EditIcon />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700">
                    Account No.
                  </label>
                  <input
                    placeholder="ex: 40000"
                    type="number"
                    name="account"
                    value={bankDetails.accountNumber}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 pr-10"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pt-6">
                    <EditIcon />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700">
                    IFSC Code
                  </label>
                  <input
                    placeholder="ex: 80000"
                    type="text"
                    name="ifsc"
                    value={bankDetails.ifscCode}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 pr-10"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pt-6">
                    <EditIcon />
                  </div>
                </div>
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700">
                  Branch Name
                </label>
                <input
                  type="text"
                  name="branch"
                  value={bankDetails.branch}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 pr-10"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pt-6">
                  <EditIcon />
                </div>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandlordProfile;
