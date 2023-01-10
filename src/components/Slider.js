import React from "react";
import { useState, useEffect } from "react";
import { data } from "./data";

function Slider(props) {
  const [currentImage, setCurrentImage] = useState("");
  const [images, setImages] = useState(data);
  const [count, setCount] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const [leftImage, setLeftImage] = useState("");
  const [rightImage, setRightImage] = useState("");

  function changeCount() {
    if (!disabled) {
      setCount((prev) => {
        if (prev < images.length - 1) {
          return prev + 1;
        } else {
          return 1;
        }
      });
    }
  }

  function clickHandler(id) {
    let copy = [...images];
    let filtered = copy.filter((ele) => ele.id === id);
    console.log(filtered);
    setDisabled(true);
    setCurrentImage(filtered[0].image);
    setCount(id);
    setTimeout(() => {
      setDisabled(false);
    }, 5000);
  }

  useEffect(() => {
    setCurrentImage(images[count]?.image);
  }, [count]);

  useEffect(() => {
    setLeftImage(() => {
      if (count > 0) {
        return images[count - 1]?.image;
      } else {
        return images[images.length - 1].image;
      }
    });

    setRightImage(() => {
      if (count < images.length - 1) {
        return images[count + 1].image;
      } else {
        return images[0].image;
      }
    });
  }, [count]);

  useEffect(() => {
    setTimeout(() => {
      changeCount();
    }, [2000]);
  }, [currentImage]);

  let dotElements = images.map((ele, index) => (
    <div
      className="dot"
      key={index}
      id={index}
      onClick={() => clickHandler(index)}
    ></div>
  ));

  return (
    <div className="slider-container">
      <div className="slider-image-container">
        <div
          className=" slider left-image"
          style={{ backgroundImage: `url('${leftImage}')` }}
        ></div>

        <div className="center">
          <img className="slider" src={currentImage} alt="slider" />
        </div>
        <div
          className=" slider right-image"
          style={{ backgroundImage: `url('${rightImage}')` }}
        ></div>
      </div>

      <div className="dot-buttons">{dotElements}</div>
    </div>
  );
}

export { Slider };
