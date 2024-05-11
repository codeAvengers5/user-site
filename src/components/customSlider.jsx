import React, { useEffect, useState } from "react";
import "./custom.slider.css";

function CustomCarousel({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState(null);

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 5000)
      );
    }
  }, [slideDone]);

  const slideNext = () => {
    setActiveIndex(val => {
      const newIndex = val + 1;
      const lastIndex = images.length - 1;
      const maxRange = lastIndex - 4; // Display 5 images at a time
      if (newIndex > maxRange) {
        return maxRange;
      } else {
        return newIndex;
      }
    });
  };

  const slidePrev = () => {
    setActiveIndex(val => {
      const newIndex = val - 1;
      if (newIndex < 0) {
        return 0;
      } else {
        return newIndex;
      }
    });
  };

  const AutoPlayStop = () => {
    if (timeID > 0) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  return (
    <div
      className="container__slider mb-11"
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}>
      <div
        className="slider__images flex flex-row"
        style={{
          transform: "translateX(" + "-" + activeIndex * 260 + "px" + ")", // Adjust the width of each image accordingly
          transition: "transform 0.5s ease" // Apply smooth transition
        }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.imgURL}
            alt={image.imgAlt}
            className={
              index === activeIndex + 2 // Display the active image in the center
                ? "slider__image slider__image-active"
                : "slider__image"
            }
            style={{
              width: "225px",
              height: "214px",
              marginRight: "80px",
              flexShrink: 0
            }}
          />
        ))}
      </div>

      <button
        className="slider__btn-next pl-[70px]"
        onClick={e => {
          e.preventDefault();
          slideNext();
        }}>
        <svg
          width="57"
          height="56"
          viewBox="0 0 57 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_373_3332)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M37.9734 25.5267C38.6288 26.1829 38.997 27.0725 38.997 28C38.997 28.9275 38.6288 29.8171 37.9734 30.4733L24.7761 43.6753C24.1195 44.3316 23.2291 44.7002 22.3007 44.7C21.3724 44.6997 20.4822 44.3307 19.8259 43.6742C19.1696 43.0176 18.8011 42.1272 18.8013 41.1988C18.8015 40.2705 19.1705 39.3803 19.8271 38.724L30.5511 28L19.8271 17.276C19.1892 16.6162 18.836 15.7322 18.8435 14.8145C18.8511 13.8968 19.2187 13.0188 19.8674 12.3696C20.516 11.7203 21.3937 11.3518 22.3114 11.3434C23.229 11.335 24.1133 11.6874 24.7737 12.3246L37.9757 25.5243L37.9734 25.5267Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_373_3332">
              <rect
                width="56"
                height="56"
                fill="white"
                transform="matrix(0 -1 1 0 0.5 56)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
      <button
        className="slider__btn-prev mr-11"
        onClick={e => {
          e.preventDefault();
          slidePrev();
        }}>
        <svg
          width="57"
          height="56"
          viewBox="0 0 57 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_373_3324)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.0266 30.4733C18.3712 29.8171 18.003 28.9275 18.003 28C18.003 27.0725 18.3712 26.1829 19.0266 25.5267L32.2239 12.3247C32.8805 11.6684 33.7709 11.2998 34.6993 11.3C35.6276 11.3003 36.5178 11.6693 37.1741 12.3258C37.8304 12.9824 38.1989 13.8728 38.1987 14.8012C38.1985 15.7295 37.8295 16.6197 37.1729 17.276L26.4489 28L37.1729 38.724C37.8108 39.3838 38.164 40.2678 38.1565 41.1855C38.1489 42.1032 37.7813 42.9812 37.1326 43.6304C36.484 44.2797 35.6063 44.6482 34.6886 44.6566C33.771 44.665 32.8867 44.3126 32.2263 43.6754L19.0243 30.4757L19.0266 30.4733Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_373_3324">
              <rect
                width="56"
                height="56"
                fill="white"
                transform="matrix(0 1 -1 0 56.5 0)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
}

export default CustomCarousel;
