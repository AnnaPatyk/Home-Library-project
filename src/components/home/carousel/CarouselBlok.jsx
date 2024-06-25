import React from "react";
import Slider from "react-slick";
import style from "./carouselBlok.module.css";
import "./slick.css";
import "./slick-theme.css";

const CarouselBlock = ({ arr }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <section className={style.carouselBlok}>
      <h2>Незабаром в наявності</h2>
      <Slider {...settings}>
        {arr.map((obj, index) => (
          <div key={index} className={style.carouselBlokContent}>
            <div style={{ height: "300px", objectFit: "contain" }}>
              <img
                src={obj.image}
                alt={obj.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div style={{ color: "white" }}>
              <h3>{obj.title}</h3>
              <p>{obj.author}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default React.memo(CarouselBlock);
