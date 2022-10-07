import React from 'react';
import { useState, useEffect } from "react";
import {relatedData} from '../../assets/relateddata.js';
import Cards from './Cards/Cards.js';
import Comparison from './Cards/ComparisonModal.js';
import Outfits from './Outfits/Outfits.js';
import styled from 'styled-components';

const RelatedProducts = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedid, setSelectedid] = useState({});
  const [twoCardsArray, setTwoCardsArray] = useState([]);

  const defaultidinfo = relatedData.defaultIdInfo;
  const relatedProductsStyles = relatedData.allRelatedRequestStyles;
  const relatedProductsDetail = relatedData.allRelatedRequestInfo;
  const relatedProductsRatings = relatedData.allRelatedRequestRatings;
  //all related data:
  // console.log('defaultidinfo', defaultidinfo);
  // console.log('relatedProductsStyles',relatedProductsStyles);
  // console.log('relatedProductsDetail', relatedProductsDetail);
  // console.log('relatedProductsRatings', relatedProductsRatings);

  useEffect(() => {
    if(selectedid.features) {
      setTwoCardsArray([defaultidinfo, selectedid]);
    }
  }, [selectedid]);


  return(
    <RelatedProductsSection>

      <RelatedHeader >Related Products</RelatedHeader>
      {
        relatedProductsStyles.length > 0 && relatedProductsDetail.length > 0
        && relatedProductsRatings.length > 0 &&
        <Cards
          relatedProductsStyles={relatedProductsStyles}
          relatedProductsDetail={relatedProductsDetail}
          relatedProductsRatings={relatedProductsRatings}
          setShowModal={setShowModal}
          setSelectedid={setSelectedid}
        />
      }
    <ComparisonWrapper>
    { showModal && twoCardsArray.length > 0 &&
      <Comparison
        twoCards={twoCardsArray}
        close={ setShowModal}
      /> }
    </ComparisonWrapper>

    <RelatedHeader>Your Outfit</RelatedHeader>
    <Outfits />

    </ RelatedProductsSection>
  )


}

const RelatedHeader = styled.h3`
  text-transform: uppercase;
  padding-left: 10px;
  padding-bottom: 10px;
`;

const RelatedProductsSection = styled.section`
  display: inline-block;
  left: 50%;
  position: relative;
  transform: translateX(-50%);
  margin:0 auto;
`;


const ComparisonWrapper = styled.div`
  position: fixed;
  width: 300px;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  backgroundColor: #FFF;
  padding: 50px;
  zIndex: 1000;
`


export default RelatedProducts;