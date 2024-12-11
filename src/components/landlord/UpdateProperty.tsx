import React, { useState } from "react";
import { PropertyDetails, PropertyUpdateForm } from "../../types";
import ImageUploader from "../shared/image-uploader/ImageUploader";
import { useMutation, useQueryClient } from "react-query";
import { updateProperty } from "../../http";
import { enqueueSnackbar } from "notistack";
import { ThreeDots } from "react-loader-spinner";

interface Props {
  property: PropertyDetails;
  onUpdateSuccess: () => void;
}

const UpdateProperty: React.FC<Props> = ({ property, onUpdateSuccess }) => {

  const queryClient = useQueryClient();

  const [photos, setPhotos] = useState<string[]>([]);

  const handlePhotosUploaded = (newImages: string[]) => {
    setPhotos(newImages);
  };

  const [formData, setFormData] = useState({
    availabilityStatus: property.availabilityStatus,
    rent: property.rent,
    deposit: property.deposit,
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

  const updateMutation = useMutation({
    mutationFn: (propertyId: string) => {
      // Log the form data and selected amenities
      const allFormData: PropertyUpdateForm = {
        ...formData,
        photos: photos,
      };

      return updateProperty(allFormData, propertyId);
    },
    onSuccess: () => {
      // Refetch properties after a successful deletion
      queryClient.invalidateQueries(["landlord/properties", property.propertyId]);
      enqueueSnackbar("Property Updated successfully!", {
        variant: "success",
      });
    },
    onError: (error: any) => {
      enqueueSnackbar(error?.response.data.message, {
        variant: "error",
      });
    },

  });

  const handleUpdate = (e: React.FormEvent, propertyId: string) => {
    e.preventDefault(); // Prevent the default link behavior
    updateMutation.mutate(propertyId); // Pass the property ID to the mutation
    onUpdateSuccess();
  };

  return (
    <>
      <form onSubmit={(e) => handleUpdate(e, property.propertyId)}>
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
          <ImageUploader
            images={property.photos}
            onImagesUploaded={handlePhotosUploaded}
          />
        </div>
        {/* Bottom Actions */}
        <div className="flex justify-end mt-8 w-full lg:w-auto">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
          >
            {updateMutation.isLoading ? <ThreeDots
                visible={true}
                height="20"
                width="30"
                color="#ffffff"
                radius="9"
                ariaLabel="three-dots-loading"
              /> :"Update"}
          </button>
        </div>
      </form>
    </>
  );
};

export default UpdateProperty;
