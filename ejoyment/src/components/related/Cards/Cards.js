import React from 'react';
import { useState, useEffect, useContext } from "react";
import CardEntry from './CardEntry.js';
import { GrCaretPrevious,  GrCaretNext } from "react-icons/gr";

const Cards = ({relatedProductsStyles, relatedProductsDetail, relatedProductsRatings,
  setShowModal, setSelectedid}) => {
    const [currIdx, setCurrIdx] = useState(0);
    // const {setId} = useContext(PropIdContext);
    const display = relatedProductsStyles.slice(currIdx, (currIdx + 4));
    console.log('display Arr', display);
    const len = relatedProductsStyles.length;
    const max = currIdx + 3;
    const min = currIdx;

    const preArr = () => {
      setCurrIdx(currIdx === 0 ? max : currIdx -1);
    }

    const nextArr = () => {
      setCurrIdx (currIdx === max ? 0 : currIdx + 1);
    }
    return (
      <ul className="cardswrapper">
        { currIdx !== 0 ? <button className="PrevButton" onClick={preArr}><GrCaretPrevious /> </button> : null }
          <div className="cardscontainer" style={{ transform: `translateX(-${currIdx * 5}%)`}}>
          {display.map((eachProduct, index) => {
            console.log('eachProduct', eachProduct);
            const id = Number(eachProduct.product_id);
            console.log('id', id);
            const productDetail = relatedProductsDetail.find(detail => detail.id === id);
            console.log('productDetail', productDetail);
            const detailedRating = relatedProductsRatings.find(detail => Number(detail.product_id) === id);
            console.log('detailedRating', detailedRating);
            let isDefault = false;
            let defaultStyles = [];
            let styledResults = eachProduct.results;
            console.log('styledResults', styledResults)
            styledResults.forEach((eachStyle) => {
              if(eachStyle['default?'] === true) {
                isDefault = true;
                defaultStyles.push(eachStyle);
              }
            })
            if(isDefault === false) {
              defaultStyles.push(styledResults[0])
            }
            return (
              <div className="individualCard" key={id}>

              { index >= min && index <= max && display.length >0 &&
                <CardEntry
                defaultsStyles={defaultStyles}
                detailProduct = {productDetail}
                detailRatings={detailedRating}
                setShowModal={setShowModal}
                setSelectedid={setSelectedid}
                />
              }
              </div>
            )
          })
        }
          </div>
          { max !== len -1 ? <button className="NextButton" onClick={nextArr}> <GrCaretNext style={{color:'blue'}}/></button> : null}
      </ul>
    )
}

export default Cards;