import { useState } from "react";
import { studioImages } from "../data/studioImages";
import Modal from "../modal/Modal";

export default function StudioCarousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider" id="images">
      {!isOpen ? <i className="fas fa-angle-left" onClick={prevSlide} /> : null}
      {!isOpen ? (
        <i className="fas fa-angle-right" onClick={nextSlide} />
      ) : null}
      {studioImages.map((slide, idx) => (
        <div className={idx === current ? "slide active" : "slide"} key={idx}>
          {idx === current && (
            <>
              <img
                src={slide.image}
                alt={slide.alt}
                onClick={() => setIsOpen((prev) => !prev)}
              />
              {isOpen ? (
                <Modal
                  isOpen={isOpen}
                  onRequestClose={() => setIsOpen((prev) => !prev)}
                  content={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="carousel-wrapper">
                    <i
                      className="fas fa-times"
                      onClick={() => setIsOpen((prev) => !prev)}
                    />
                  </div>
                </Modal>
              ) : null}
            </>
          )}
        </div>
      ))}
    </div>
  );
}
