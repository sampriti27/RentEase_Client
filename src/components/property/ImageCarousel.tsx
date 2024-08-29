import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import React from "react";

interface Props {
  urls: string[] | undefined;
}
const ImageCarousel: React.FC<Props> = ({ urls }) => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      {urls?.map((url, ind) => (
        <div key={ind}>
          <img
            src={url}
            alt={`Property Photo ${ind + 1}`}
            className="rounded-lg object-cover mx-auto"
            style={{ height: "300px" }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
