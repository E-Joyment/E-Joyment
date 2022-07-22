import React from 'react';
import { useState, useEffect } from "react";
import {relatedData} from '../../assets/relateddata.js';
import Cards from './Cards/Cards.js';
import Comparison from './Cards/ComparisonModal.js';
import Outfits from './Outfits/Outfits.js';

const RelatedProducts = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedid, setSelectedid] = useState({});
  const [twoCardsArray, setTwoCardsArray] = useState([]);

  const defaultidinfo = relatedData.defaultIdInfo;
  const relatedProductsStyles = relatedData.allRelatedRequestStyles;
  const relatedProductsDetail = relatedData.allRelatedRequestInfo;
  const relatedProductsRatings = relatedData.allRelatedRequestRatings;
  //all related data:
  console.log('defaultidinfo', defaultidinfo);
  console.log('relatedProductsStyles',relatedProductsStyles);
  console.log('relatedProductsDetail', relatedProductsDetail);
  console.log('relatedProductsRatings', relatedProductsRatings);

  useEffect(() => {
    if(selectedid.features) {
      setTwoCardsArray([defaultidinfo, selectedid]);
    }
  }, [selectedid]);


  return (
    <section>
      <div className="container">
      <h3 className="relatedheader">Related Products</h3>
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
      <div className = "comparisonWrapper">
      { showModal && twoCardsArray.length > 0 &&
      <Comparison
        twoCards={twoCardsArray}
        close={ setShowModal}
      /> }
      </div>
      <h3 className="relatedheader">
        Your WishList
      </h3>
      {/* <Outfits /> */}
     </div>
    </section>
  )



}

export default RelatedProducts;