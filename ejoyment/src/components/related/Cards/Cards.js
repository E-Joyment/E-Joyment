import React from 'react';
import { useState, useEffect, useContext } from "react";
import CardEntry from './CardEntry.js';
import { GrCaretPrevious,  GrCaretNext } from "react-icons/gr";
import styled from 'styled-components';

const Cards = ({relatedProductsStyles, relatedProductsDetail, relatedProductsRatings,
  setShowModal, setSelectedid}) => {
    const [currIdx, setCurrIdx] = useState(0);
    // const {setId} = useContext(PropIdContext);
    const display = relatedProductsStyles.slice(currIdx, (currIdx + 4));
    // console.log('display Arr', display);
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
      <CardsWrapper>
        { currIdx !== 0 ? <PrevButton onClick={preArr}><GrCaretPrevious /> </PrevButton> : null }

          <Cardscontainer style={{ transform: `translateX(-${currIdx * 5}%)`}}>
          {display.map((eachProduct, index) => {
            // console.log('eachProduct', eachProduct);
            const id = Number(eachProduct.product_id);
            // console.log('id', id);
            const productDetail = relatedProductsDetail.find(detail => detail.id === id);
            // console.log('productDetail', productDetail);
            const detailedRating = relatedProductsRatings.find(detail => Number(detail.product_id) === id);
            // console.log('detailedRating', detailedRating);
            let isDefault = false;
            let defaultStyles = [];
            let styledResults = eachProduct.results;
            // console.log('styledResults', styledResults)
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
              <Individualcard key={id}>

              { index >= min && index <= max && display.length >0 &&
                <CardEntry
                defaultsStyles={defaultStyles}
                detailProduct = {productDetail}
                detailRatings={detailedRating}
                setShowModal={setShowModal}
                setSelectedid={setSelectedid}
                />
              }
              </Individualcard>
            )
          })
        }
          </Cardscontainer>
          { max !== len -1 ? <NextButton onClick={nextArr}> <GrCaretNext style={{color:'blue'}}/></NextButton> : null}
      </CardsWrapper>
    )
}
const CardsWrapper = styled.ul`
width:  1400px;
padding: 40px 0;
overflow: hidden;
position: relative;
`
const Cardscontainer = styled.div`
margin-left: 33px;
display: flex;
gap: 10px;
position: relative;
transition: .5s;
scroll-behavior: smooth;
`;

const Individualcard = styled.div`
width:300px;
height: 400px;
`

const PrevButton = styled.button`
align-items: center;
justify-content: center;
display: flex;
position: absolute;
z-index: 1;
left:16px;
top: 50%;
transform: translateY(-50%);
width: 45px;
height: 45px;
border-radius: 100%;
border: 1px solid #008c75;
box-shadow: 1px 1px 3px rgba(0,0,0,.25);
transition: all .25s ease;
font-weight: bold;
background-color: rgba(255,255,255, 0.75);
backdrop-filter: blur(2px);
&:hover,
&:focus {
  background-color: #008c75;
  outline: none;
  opacity: .7;
};
& svg {
  transform: translateX(-22%);
  stroke: #008c75 !important;
  fill: #008c75 !important;
}
`
const NextButton = styled.button`
align-items: center;
justify-content: center;
display: flex;
  position: absolute;
  z-index: 1;
  right:16px;
  top: 50%;
  transform: translateY(-50%);
  width: 45px;
  height: 45px;
  border-radius: 100%;
  border: 1px solid #008c75;
  box-shadow: 1px 1px 3px rgba(0,0,0,.25);
  transition: all .25s ease;
  font-weight: bold;
  background-color: rgba(255,255,255, 0.75);
  backdrop-filter: blur(2px);
  &:hover,
  &:focus {
    background-color: #008c75;
    outline: none;
  };
  & svg {
    transform: translateX(22%);
  }
`

const ComparisonWrapper = styled.div`
position: fixed;
top: 55%;
left: 50%;
transform: translate(-50%, -50%);
backgroundColor: #FFF;
padding: 50px;
zIndex: 1000;
`
export default Cards;