import React from "react";
import Slider from "react-slick";
import "../home/carousel/slick.css";
import "../home/carousel/slick-theme.css";

function CommentsCarousel({ arr }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <Slider {...settings}>
      {arr.map((obj) => (
        <div>
          <h5>{obj.userName}</h5>
          <p>{obj.comment}</p>
        </div>
      ))}
    </Slider>
  );
}
export default React.memo(CommentsCarousel);
