import "./overview.css";
import {overviewData} from "../../assets/overviewdata.js";
import {reviewData} from "../../assets/reviewdata.js";
import {useState} from "react";
import Select from "react-select";
import StarRating from 'react-star-ratings';
export default function Overview() {
  const [curStyle, setCurStyle] = useState(0);
  const [size, setSize] = useState();
  const styles = overviewData.styles;
  const stylethumbs = [];
  styles.map((style) => {stylethumbs.push(style.photos[0].thumbnail_url)});
  const product = overviewData.overview;
  const thumbs = styles[curStyle].photos;
  const sizeOptions = [];
  Object.keys(styles[curStyle].skus).map((key) => {
    if (styles[curStyle].skus[key].quantity>0) {
      sizeOptions.push({'value':key, 'label': styles[curStyle].skus[key].size});
    }
  })
  let sumRating = 0;
  let numRating = 0;
  for(let item in reviewData.ratings) {
    sumRating += Number(item) *  Number(reviewData.ratings[item]);
    numRating += Number(reviewData.ratings[item]);
  }
  let rating = numRating > 0? sumRating/numRating : 0;

  function changeSize (e) {
    setSize(styles[curStyle].skus[e.value]['size']);
  }

  return(
    <section>
      <div className="container">
        <div className="overviewTop">
          <div className="thumbnailsContainer">
            {thumbs.map(t => (<img className="thumb" src={t.thumbnail_url} alt=""/>))}
          </div>
          <div className="mainImgContainer">
            <img className="mainImg" alt="" src={thumbs[0].url}/>
          </div>
          <div className="productContainer">
            <div className="productCat">{product.category}</div>
            <div className="productName">{product.name}</div>
            <div className="productRating">
              <StarRating rating = {rating} id="productRatingStar" starRatedColor="#D6336C" starEmptyColor ='grey'
                starSelectingHoverColor = 'black' numberOfStars={5} name='rating' starDimension="15px" starSpacing="0px"/>
              <div className="productRatingNum">({numRating})</div>
            </div>
            <div className="styleContainer">
              <div className="styleTitleContainer">
                <div className="styleTitle">STYLE</div>
                <div className="styleName">{styles[curStyle].name}</div>
              </div>
              <div className="styleThumbsContainer">
                {stylethumbs.map((stylethumb,i) => {
                  if(i === curStyle) {
                    return <div className="stylethumbInd" onClick = {() =>setCurStyle(i)}> <img className="stylecheck" src={stylethumb} alt=""/></div>
                  }
                    return <div className="stylethumbInd" onClick = {() =>setCurStyle(i)}> <img className="stylethumb" src={stylethumb} alt=""/> </div>;
                  })
                }
              </div>
            </div>
            {styles[curStyle].sale_price === null ?
              (<div className="priceContainer">${styles[curStyle].original_price}</div>) :
              (<div className="priceContainer" ><div className="productSalePrice"> ${styles[curStyle].sale_price}</div><div className="productOriginPrice">${styles[curStyle].original_price}</div></div>)}
            <div className="sizeContainer">
              <Select placeholder = 'SELECT SIZE' onChange = {changeSize} options = {sizeOptions}/>
            </div>
            <div className="addBag">
              <button className="addBagButton">Add to Bag<span class="material-symbols-outlined" id="addBagid">local_mall</span></button>
              <div className="addFav"><span class="material-symbols-outlined" id="favId">favorite</span></div>
            </div>
          </div>
        </div>
        <div className="overviewBottom">
          <div className="overviewSlogan">{overviewData.overview.slogan}</div>
          <div className="overviewDesc">{overviewData.overview.description}</div>

        </div>
      </div>
    </section>
  )
}