import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import React from "react";

// interface Props {
//   urls: string[] | undefined;
// }
const ImageCarousel: React.FC = () => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      <div className="z-0">
        <img
          src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Property Photo 1"
          className="rounded-lg object-cover mx-auto"
          style={{ height: "300px" }}
        />
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Property Photo 2"
          className="rounded-lg object-cover mx-auto"
          style={{ height: "300px" }}
        />
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Property Photo 3"
          className="rounded-lg object-cover mx-auto"
          style={{ height: "300px" }}
        />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
