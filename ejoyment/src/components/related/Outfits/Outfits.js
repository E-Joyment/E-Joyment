import React from 'react';
import { useState, useEffect, useContext } from "react";
import {PropIdContext} from '../../../App.js';
import styled from 'styled-components';
import axios from 'axios';
import OutfitEntry from './OutfitEntry.js';
import { GrCaretPrevious,  GrCaretNext } from "react-icons/gr";
import {relatedData} from '../../../assets/relateddata.js';
import {overviewData} from '../../../assets/overviewdata.js';


const Outfits = () => {
  const [id, setId] = useState('40348');
  const [allRatings, setAllRatings] = useState(0);
  const [curPhoto, setCurPhoto] = useState(0);
  const [styleIndx, setStyleIndx] = useState(0);


  const [outfit, setOutfit] = useState(JSON.parse(localStorage.getItem('outfit')) ?
  JSON.parse(localStorage.getItem('outfit')) : [])
  console.log('outfit', outfit);

  const [current, setCurrent] = useState(0);
  const length = outfit.length;
  const prevArrow = () => {
    setCurrent(current === 0 ? max : current -1)
  };

  const nextArrow = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  };

  const max = current + 3;
  const min = current;

  const overviewDatas = relatedData.defaultIdInfo;
  console.log('overviewData', overviewData)
  const overviewStyles = overviewData.styles[styleIndx].photos[curPhoto];
  console.log('overviewStyles', overviewStyles)


  const [urls, setUrls] = useState([]);

  const addOutfit = () => {
      const imageNotFound = "http://placecorgi.com/260/180";
      let newOutfit = {};
        newOutfit.id = overviewDatas.id;
        newOutfit.name = overviewDatas.name;
        newOutfit.category = overviewDatas.category;
        newOutfit.default_price = overviewDatas.default_price
        newOutfit.image = overviewStyles.url || imageNotFound;
        if (localStorage.getItem("outfit") === null) {
          let outfit = [];
          outfit.push(newOutfit);
          localStorage.setItem("outfit", JSON.stringify(outfit));
          setOutfit(outfit);
          let copy = [...urls];
          copy.push(newOutfit.image);
          setUrls(copy);
        }
        let outfit = localStorage.getItem("outfit");

        let copyExists = false;
        for (let value of urls) {
          if (value === newOutfit.image) {
            copyExists = true;
            break;
          }
        }
        if (copyExists) {
          alert('item already added');
        } else {
          outfit = JSON.parse(outfit);
          outfit.push(newOutfit);
          localStorage.setItem("outfit", JSON.stringify(outfit));
          setOutfit(outfit);
          let copy = [...urls];
          copy.push(newOutfit.image);
          setUrls(copy);
        }
  }

  return (
    <OutfitsWrapper>

      { current !== 0 ? <PrevButton onClick={prevArrow}> <GrCaretPrevious/> </PrevButton>: null }

      <Addoutfit onClick={addOutfit}>Add outfit</Addoutfit>

      <Outfitscontainer style={{ transform: `translateX(-${current * 25}%)`}}>

      {outfit.length > 0  ?
        outfit.map((item, index) => {
          // console.log('url', urls);
          return (
            <IndividualOutfit key={index}>
              {index <= max && index >= min &&
              <OutfitEntry
                key={index}
                item={item}
                setOutfit={setOutfit}
                // ratings = {AverageStars(allRatings.ratings)}
              />}
          </IndividualOutfit >
          )
        })
        : ''}
      </Outfitscontainer>
      { current !== max ?  <NextButton onClick={nextArrow}><GrCaretNext /> </NextButton>: null }
    </OutfitsWrapper>
  )
}

const OutfitsWrapper = styled.ul`
  width:  1400px;
  padding: 40px 0;
  overflow: hidden;
  position: relative;
`

const Outfitscontainer = styled.div`
  margin-left: 33px;
  display: flex;
  gap: 10px;
  position: relative;
  transition: .5s;
  scroll-behavior: smooth;
`;

const IndividualOutfit = styled.div`
  display: flex;
  flex-direction: row;
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


const Addoutfit = styled.button`
margin-left: 33px;
margin-bottom: 25px;
  align-items: center;
  background-color: #008c75;
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #FFF;
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  font-size: 14px;
  font-weight: 500;
  height: 48px;
  justify-content: center;
  letter-spacing: .25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 2px 24px;
  position: relative;
  top: 40%;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  will-change: transform,opacity;
  z-index: 0;
  &:hover {
  background: #F6F9FE;
  color: #008c75;
  }
  &:active {
  box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%);
  outline: none;
  }
  &:focus {
  outline: none;
  border: 2px solid #008c75;
  }
  &:not(:disabled) {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
  }
  &:not(:disabled):hover {
  box-shadow: rgba(60, 64, 67, .3) 0 2px 3px 0, rgba(60, 64, 67, .15) 0 6px 10px 4px;
  }
  &:not(:disabled):focus {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
  }
  &:not(:disabled):active {
  box-shadow: rgba(60, 64, 67, .3) 0 4px 4px 0, rgba(60, 64, 67, .15) 0 8px 12px 6px;
  }
  &:disabled {
  box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
  }
`

export default Outfits;