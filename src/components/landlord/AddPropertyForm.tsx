import React, { useState } from "react";
import { otherAmenities, furnishedAmmenties } from "../../constants/index";
import { motion } from "framer-motion";
import {
  APIResponse,
  PostProperty,
  PropertyDetails,
  PropertyFormData,
} from "../../types";
import ImageUploader from "../shared/image-uploader/ImageUploader";
import { enqueueSnackbar } from "notistack";
import { useMutation } from "react-query";
import { addProperties } from "../../http";
import { AxiosResponse } from "axios";
import { useSelector } from "react-redux";
import { isValidCharCount } from "../../utils";
import { ThreeDots } from "react-loader-spinner";

const AddPropertyForm: React.FC = () => {
  const { userData } = useSelector((state: any) => state.auth);
  // states
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [selectedFurnishedAmenities, setSelectedFurnishedAmenities] = useState<
    string[]
  >([]);
  const [photos, setPhotos] = useState<string[]>([]);

  // states for form inputs
  const [formData, setFormData] = useState<PropertyFormData>({
    name: "",
    address: "",
    city: "",
    pinCode: "",
    state: "",
    tenantType: "",
    propertyType: "",
    floor: "",
    size: "",
    propertyAge: "",
    availabilityStatus: "",
    furnishedStatus: "",
    rent: 0,
    deposit: 0,
    configuration: "",
    description: "",
  });

  // handlers
  // handlers for input fields
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelect = (option: string) => {
    // Toggle selection
    if (selectedAmenities.includes(option)) {
      setSelectedAmenities(selectedAmenities.filter((item) => item !== option));
    } else {
      setSelectedAmenities([...selectedAmenities, option]);
    }
  };
  const handleFurnishedAmenitiesSelect = (option: string) => {
    // Toggle selection
    if (selectedFurnishedAmenities.includes(option)) {
      setSelectedFurnishedAmenities(
        selectedFurnishedAmenities.filter((item) => item !== option)
      );
    } else {
      setSelectedFurnishedAmenities([...selectedFurnishedAmenities, option]);
    }
  };

  const handleImageUpload = (newImages: string[]) => {
    setPhotos(newImages);
  };

  const selectedString = selectedAmenities.join(", ");
  const selectedFurnishedAmenitiesString =
    selectedFurnishedAmenities.join(", ");

  const handlePostProperty = useMutation({
    mutationFn: () => {
      const allFormData: PostProperty = {
        ...formData,
        otherAmenities: selectedAmenities,
        furnishedAmenities: selectedFurnishedAmenities,
        photos: photos,
      };

      if (!isValidCharCount(allFormData.description)) {
        enqueueSnackbar("Description must be less than 170 characters !", {
          variant: "warning",
        });
      }

      return addProperties(allFormData, userData.userId);
    },
    onSuccess: (data: AxiosResponse<APIResponse<PropertyDetails>>) => {
      enqueueSnackbar(data.data.message, {
        variant: "success",
      });
      console.log(data);
    },
    onError: (error: any) => {
      enqueueSnackbar(error?.response.data.message, {
        variant: "error",
      });
      console.log(error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handlePostProperty.mutate();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col lg:flex-row gap-10 p-8 bg-gray-50">
          {/* Left Section - Property Information */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">
              Property Informations
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Please provide a detailed and accurate property address for
              verification purposes.
            </p>
            <div className="flex flex-col lg:flex-row gap-10 p-8 bg-gray-50">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Property Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Property Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Pincode
                    </label>
                    <input
                      type="number"
                      name="pinCode"
                      value={formData.pinCode}
                      onChange={handleInputChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Tenant Type
                  </label>
                  <select
                    name="tenantType"
                    value={formData.tenantType}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option>Select An Option</option>
                    <option>Family</option>
                    <option>Bachelor</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Property Type
                  </label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option>Select An Option</option>
                    <option>House</option>
                    <option>Apartment</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Floor
                    </label>
                    <input
                      placeholder="ex: 3rd of 7 Floors"
                      type="text"
                      name="floor"
                      value={formData.floor}
                      onChange={handleInputChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Size
                    </label>
                    <input
                      name="size"
                      placeholder="ex: 1 BHK"
                      value={formData.size}
                      onChange={handleInputChange}
                      type="text"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Property Age
                    </label>
                    <input
                      type="text"
                      name="propertyAge"
                      placeholder="ex: 5 Years"
                      value={formData.propertyAge}
                      onChange={handleInputChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Availablity Status
                    </label>
                    <select
                      name="availabilityStatus"
                      value={formData.availabilityStatus}
                      onChange={handleInputChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option>Select An Option</option>
                      <option>Available</option>
                      <option>Booked</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Furnished Status
                    </label>
                    <select
                      name="furnishedStatus"
                      value={formData.furnishedStatus}
                      onChange={handleInputChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option>Select An Option</option>
                      <option>Fully Furnished</option>
                      <option>Semi Furnished</option>
                      <option>Unfurnished</option>
                    </select>
                  </div>
                </div>
                {(formData.furnishedStatus === "Fully Furnished" ||
                  formData.furnishedStatus === "Semi Furnished") && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Furnished Amenities
                    </label>

                    {/* Input to show selected options */}
                    <input
                      type="text"
                      value={selectedFurnishedAmenitiesString}
                      readOnly
                      className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Selected amenities will appear here"
                    />

                    {/* Dropdown options */}
                    <div className="border border-gray-300 rounded-md p-4 space-y-2 bg-white">
                      {furnishedAmmenties.map((option, index) => (
                        <div key={index} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`amenity-${index}`}
                            checked={selectedFurnishedAmenities.includes(
                              option
                            )}
                            onChange={() =>
                              handleFurnishedAmenitiesSelect(option)
                            }
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label
                            htmlFor={`amenity-${index}`}
                            className="ml-2 text-sm text-gray-700"
                          >
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Right Section - Personal Information */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">Other Informations</h2>
            <p className="text-sm text-gray-600 mb-4">
              This information will be displayed publicly so share proper
              information.
            </p>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Rent (₹)
                  </label>
                  <input
                    placeholder="ex: 40000"
                    type="number"
                    name="rent"
                    value={formData.rent}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Deposit (₹)
                  </label>
                  <input
                    placeholder="ex: 80000"
                    type="number"
                    name="deposit"
                    value={formData.deposit}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Configuration
                </label>
                <input
                  type="text"
                  name="configuration"
                  placeholder="ex: 2 Bedroom, 1 Hall, 1 Kitchen"
                  value={formData.configuration}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Property Description
                </label>
                <textarea
                  placeholder="Write a few sentences about property."
                  rows={3}
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Property Photos
                </label>
                <ImageUploader onImagesUploaded={handleImageUpload} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Other Amenities
                </label>

                {/* Input to show selected options */}
                <input
                  type="text"
                  value={selectedString}
                  readOnly
                  className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Selected amenities will appear here"
                />

                {/* Dropdown options */}
                <div className="border border-gray-300 rounded-md p-4 space-y-2 bg-white">
                  {otherAmenities.map((option, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`amenity-${index}`}
                        checked={selectedAmenities.includes(option)}
                        onChange={() => handleSelect(option)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor={`amenity-${index}`}
                        className="ml-2 text-sm text-gray-700"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex justify-end mt-8 w-full lg:w-auto">
          <button className="text-sm font-medium text-gray-600 hover:text-gray-800 mr-4">
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
          >
            {handlePostProperty.isLoading ? (
              <ThreeDots
                visible={true}
                height="20"
                width="30"
                color="#ffffff"
                radius="9"
                ariaLabel="three-dots-loading"
              />
            ) : (
              "Add"
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default AddPropertyForm;
