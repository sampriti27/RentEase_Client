import Alerts from "../../components/shared/alerts/Alerts";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import ImageUploader from "../../components/shared/image-uploader/ImageUploader";
import { EditIcon } from "../../components/icons";
import CrystalButton from "../../components/shared/buttons/CrystalButton";
import { UpdateProfileProps } from "../../types";
import { useMutation } from "react-query";
import { updateProfile } from "../../http";
import { setAuthData } from "../../store/slices/userSlice";
import { ThreeDots } from "react-loader-spinner";
import { enqueueSnackbar } from "notistack";

const bankDetails = {
  bankName: "XYZ Bank",
  accountNumber: "123456789012",
  ifscCode: "XYZB0001234",
  branch: "Dhanabad Branch",
};

const LandlordProfile: React.FC = () => {
  const dispatch = useDispatch();
  const { isUserActivated, userData } = useSelector((state: any) => state.auth);
  const [picUrl, setPicUrl] = useState<string>();
  const [formData, setFormData] = useState<UpdateProfileProps>({
    fullName: userData.fullName,
    address: userData.address || "",
    city: userData.city || "",
    photoUrl: picUrl || "https://api.dicebear.com/7.x/open-peeps/svg?seed=Bear",
    pinCode: userData.pinCode || "",
    state: userData.state || "",
    phone: userData.phone || 0,
    dob: userData.dob || "",
  });

  const handleImageUpload = (newImages: string[]) => {
    setPicUrl(newImages[0]);
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const updateMutation = useMutation({
    mutationFn: (formData: UpdateProfileProps) => {
      return updateProfile(userData.role, userData.userId, formData);
    },
    onSuccess: (data) => {
      // console.log(data.data);
      dispatch(
        setAuthData({
          isAuth: true,
          isUserActivated: userData.userActivated as boolean,
          userData: data.data.data,
          role: userData.role as string,
        })
      );
      enqueueSnackbar("Data Updated Successfully!", {
        variant: "success"
      })
    },
    onError: (error) => {
      console.log(error)
      enqueueSnackbar("Something went wrong!", {
        variant: "error"
      })
    },
  });

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic to handle form submission, like sending data to an API
    updateMutation.mutate(formData);
    // console.log("Form data submitted:", formData);
  };

  useEffect(() => {
    document.title = "RentEase | Profile";
  }, []);

  return (
    <>
      {!isUserActivated && <Alerts />}
      <section className="container mx-auto px-4 py-6 md:py-14">
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
                  src="https://api.dicebear.com/7.x/open-peeps/svg?seed=Bear"
                  width={30}
                  alt="avatar"
                  height={30}
                  className="w-[100%] h-[100%] rounded-[50%]"
                />
              </div>
              <div className="flex items-start flex-col">
                <h3 className="font-bold text-[20px]">{formData.fullName}</h3>
                <span className="text-sm">@{userData.username}</span>
                {isUserActivated && (
                  <span className="text-[12px]">
                    {formData.address +
                      ", " +
                      formData.city +
                      ", " +
                      formData.pinCode +
                      ", " +
                      formData.state}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Personal + Bank Details */}
        <div className="flex flex-col lg:flex-row gap-10 p-8 mt-4 bg-gray-50">
          {/* Left Section - Property Information */}
          <div className="flex-1 lg:pr-4">
            <h2 className="text-xl font-semibold mb-2">
              Personal Informations
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Please provide a detailed and accurate property address for
              verification purposes.
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
                      value={formData.fullName}
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
                    value={formData.address}
                    onChange={handleChange}
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
                      value={formData.city}
                      onChange={handleChange}
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
                      value={formData.pinCode}
                      onChange={handleChange}
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
                      value={formData.state}
                      onChange={handleChange}
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
                      value={formData.phone}
                      onChange={handleChange}
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
                      value={formData.dob}
                      onChange={handleChange}
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
                  {updateMutation.isLoading ? (
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
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Section - Bank Details */}
          <div className="flex-1 lg:pl-4">
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
                  Bank Address
                </label>
                <input
                  placeholder="ex: 40000"
                  type="text"
                  name="account"
                  value={bankDetails.branch}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 pr-10"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pt-6">
                  <EditIcon />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-600 mt-4 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Update
            </button>
          </div>
        </div>
        <div className="mt-4">
          <CrystalButton text="Delete Account" color="red" />
        </div>
      </section>
    </>
  );
};

export default LandlordProfile;
