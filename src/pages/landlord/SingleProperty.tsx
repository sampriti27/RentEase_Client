import React from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { BackArrow } from "../../components/icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SingleProperty: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="px-4 py-14">
        <div
          onClick={() => navigate(-1)}
          className="bg-blue-100 p-1 w-10 mb-4 cursor-pointer rounded-full text-blue-500 hover:bg-blue-200"
        >
          <BackArrow />
        </div>

        {/* Property Details */}
        <div className="p-6 bg-white rounded-md">
          {/* Address and Name Section */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Modern Apartment
              </h2>
              <p className="text-gray-600">
                123 Main St, Cityville, Stateville, 123456
              </p>
            </div>
            <div className="text-right">
              <p className="text-gray-500">Listed: August 20, 2024</p>
              <p className="text-green-600">Available</p>
            </div>
          </div>

          {/* Property Details Summary */}

          {/* Carousel Section */}
          <div className="mt-2">
            <Carousel width={600} showThumbs={false} autoPlay infiniteLoop>
              <div>
                <img
                  src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Property Photo 1"
                  className="rounded-lg object-cover mx-auto"
                  style={{ width: "600px", height: "300px" }}
                />
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Property Photo 2"
                  className="rounded-lg object-cover mx-auto"
                  style={{ width: "600px", height: "300px" }}
                />
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Property Photo 3"
                  className="rounded-lg object-cover mx-auto"
                  style={{ width: "600px", height: "300px" }}
                />
              </div>
            </Carousel>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Description
            </h3>
            <p className="text-gray-700">
              A spacious 2-bedroom apartment with a city view and modern
              amenities.
            </p>
          </div>

          {/* Other Amenities */}
          <div className="grid grid-cols-2 mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Furnished Amenities
              </h3>
              <ul className="flex flex-wrap gap-4 list-none pl-5 text-blue-500 font-medium">
                <li className="bg-gray-100 px-2 py-1 w-full text-center">
                  Refrigerator
                </li>
                <li className="bg-gray-100 px-2 py-1 w-full text-center">
                  Air Conditioning
                </li>
                <li className="bg-gray-100 px-2 py-1 w-full text-center">
                  Washing Machine
                </li>
                <li className="bg-gray-100 px-2 py-1 w-full text-center">
                  Bed
                </li>
                <li className="bg-gray-100 px-2 py-1 w-full text-center">
                  Wardrobe
                </li>
                <li className="bg-gray-100 px-2 py-1 w-full text-center">
                  Modular Kitchen
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Other Amenities
              </h3>
              <ul className="flex gap-4 list-none pl-5 text-blue-500 font-medium">
                <li className="bg-blue-100 px-2 py-1 w-full text-center">
                  Gym
                </li>
                <li className="bg-blue-100 px-2 py-1 w-full text-center">
                  Lift
                </li>
                <li className="bg-blue-100 px-2 py-1 w-full text-center">
                  Parking
                </li>
                <li className="bg-blue-100 px-2 py-1 w-full text-center">
                  Power Backup
                </li>
                <li className="bg-blue-100 px-2 py-1 w-full text-center">
                  Swimming Pool
                </li>
                <li className="bg-blue-100 px-2 py-1 w-full text-center">
                  Laundry Facilities
                </li>
                <li className="bg-blue-100 px-2 py-1 w-full text-center">
                  Security Surveillance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProperty;
