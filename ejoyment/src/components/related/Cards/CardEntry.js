import React from 'react';
import { useState, useEffect, useContext } from "react";
import {AiFillStar} from "react-icons/ai";

const CardEntry = ({defaultsStyles, detailProduct, detailRatings,  setShowModal, setSelectedid}) => {
  const [hover, setHover] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);
  const imageNotFound = "http://placecorgi.com/260/180";
  const imagesArr = defaultsStyles[0].photos;

  const defaultImage = imagesArr[0].url === null ? imageNotFound : imagesArr[0].url;

  const onMouseEnter = () => {
    setHover(true);
  }

  const onMouseLeave = () => {
    setHover(false);
  }

  const max = imagesArr.length -1;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === max ? 1 : prevIndex + 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [])


  const defaultHover = (currentIndex) => {
    if(hover) {
      // console.log('imagesArr[currentIndex]',imagesArr[currentIndex]);
      if(imagesArr[1] === undefined) {
        return defaultImage;
      }
      if(imagesArr[currentIndex]) {
        return imagesArr[currentIndex].url;
      }
   } else {
      return defaultImage;
   }
  }


  return (
    <div className="carditem">
      <div className="cardImageBox">
        <img src={defaultHover(currentIndex)} alt="product">
        </img>
      </div>
      <div className="cardinfo">
      <p style={{margin: 0}}>{detailProduct.category}</p>
          <h3 style={{margin: 0}}><b>{detailProduct.name}</b></h3>
          <p className="price">${ defaultsStyles[0].sale_price === null
          ?  defaultsStyles[0].original_price
          :  defaultsStyles[0].sale_price }</p>
          {/* <Ratings>{ AverageStars(detailRatings.ratings) }</Ratings */}
      </div>
    </div>
  )
}

export default CardEntry;