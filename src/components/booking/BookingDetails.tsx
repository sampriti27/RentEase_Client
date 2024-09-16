import React, { useState } from "react";
import { useSelector } from "react-redux";
import { EditIcon } from "../icons";
import ImageUploader from "../shared/image-uploader/ImageUploader";
import { PropertyDetails } from "../../types";
// import { ThreeDots } from "react-loader-spinner";

interface Props {
  property: PropertyDetails;
}
const BookingDetails: React.FC<Props> = ({ property }) => {
  const { userData } = useSelector((state: any) => state.auth);
  const [picUrl, setPicUrl] = useState<string>();
  const handleImageUpload = (newImages: string[]) => {
    setPicUrl(newImages[0]);
  };
  const handleSubmit = () => {};
  return (
    <>
      <div className="w-full px-4  sm:px-8   xl:px-24">
        <div className=" p-8 mt-4 bg-gray-50 rounded-lg">
          <p className="text-base  sm:text-2xl lg:text-3xl text-gray-700 font-medium w-full text-center">
            Book Your Rental Property
          </p>
          <div className="flex flex-col lg:flex-row gap-10 mt-10">
            {/* Left Section - Tenant Information */}
            <div className="flex-1 lg:pr-4">
              <h2 className="text-xl font-medium mb-2 text-gray-700 ">
                Personal Informations
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Please provide accurate personal information which will be used
                for verification purposes and your tenant profile.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={"Sampriti"}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        value={userData.email}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      //   value={formData.address}
                      //   onChange={handleChange}
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
                        // value={formData.city}
                        // onChange={handleChange}
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
                        // value={formData.pinCode}
                        // onChange={handleChange}
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
                        // value={formData.state}
                        // onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 pr-10"
                        required
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pt-6">
                        <EditIcon />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700">
                        Phone
                      </label>
                      <input
                        type="number"
                        name="phone"
                        // value={formData.phone}
                        // onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 pr-10"
                        required
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pt-6">
                        <EditIcon />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700">
                        Date Of Birth
                      </label>
                      <input
                        type="text"
                        name="dob"
                        // value={formData.dob}
                        // onChange={handleChange}
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
                    {/* {updateMutatio.isLoading ? (
                  <ThreeDots
                    visible={true}
                    height="20"
                    width="40"
                    color="#ffffff"
                    radius="9"
                    ariaLabel="three-dots-loading"
                  />
                ) : (
                  "Update"
                )} */}
                    Update
                  </button>
                </div>
              </form>
            </div>

            {/* Right Section - Bank Details */}
            <div className="flex-1 lg:pl-4">
              <h2 className="text-xl font-medium mb-2 text-gray-700 ">
                Booking Details
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Fill the dates properly as it will be used to make the lease.
              </p>

              <div className="space-y-4">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700">
                    Booking Amount
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={property.rent + property.deposit}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md   pr-10 outline-none"
                    readOnly
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700">
                      Start Date
                    </label>
                    <input
                      placeholder="ex: dd-mm-yyyy"
                      type="date"
                      name="account"
                      //   value={bankDetails.accountNumber}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 pr-10"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pt-6">
                      <EditIcon />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700">
                      End Date
                    </label>
                    <input
                      placeholder="ex: ex: dd-mm-yyyy"
                      type="date"
                      name="ifsc"
                      //   value={bankDetails.ifscCode}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 pr-10"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pt-6">
                      <EditIcon />
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-600 mt-4 w-full text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingDetails;
