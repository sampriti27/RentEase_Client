import React, { useState } from "react";
import { PropertyUpdateForm } from "../../types";
import ImageUploader from "../shared/image-uploader/ImageUploader";

const UpdateProperty: React.FC = () => {
  const [photos, setPhotos] = useState<string[]>([]);

  const handlePhotosUploaded = (newImages: string[]) => {
    setPhotos(newImages);
  };

  const [formData, setFormData] = useState({
    availabilityStatus: "",
    rent: 0,
    deposit: 0,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Log the form data and selected amenities
    const allFormData: PropertyUpdateForm = {
      ...formData,
      photos: photos,
    };

    console.log(allFormData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Availablity Status
          </label>
          <select
            name="availabilityStatus"
            value={formData.availabilityStatus}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option>Select An Option</option>
            <option>Available</option>
            <option>Booked</option>
          </select>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Add Photos
          </label>
          <ImageUploader onImagesUploaded={handlePhotosUploaded} />
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
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default UpdateProperty;
