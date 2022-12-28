import { useState } from "react";
import { studioImages } from "../data/studioImages";

export default function StudioCarousel({ images }) {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider" id="images">
      <i className="fas fa-angle-left" onClick={prevSlide} />
      <i className="fas fa-angle-right" onClick={nextSlide} />
      {studioImages.map((slide, idx) => (
        <div className={idx === current ? "slide active" : "slide"} key={idx}>
          {idx === current && <img src={slide.image} alt={slide.alt} />}
        </div>
      ))}
    </div>
  );
}
