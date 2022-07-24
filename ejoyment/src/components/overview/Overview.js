import "./overview.css";
import Zoom from 'react-img-zoom'
import {overviewData} from "../../assets/overviewdata.js";
import {reviewData} from "../../assets/reviewdata.js";
import {useState,useRef} from "react";
import Select from "react-select";
import StarRating from 'react-star-ratings';

export default function Overview() {
  const [curStyle, setCurStyle] = useState(0);
  const [size, setSize] = useState();
  const [startImg, setStartImg] = useState(0);
  const styles = overviewData.styles;
  const [main, setMain] = useState(0);
  const nImg = styles[curStyle].photos.length;
  const stylethumbs = [];
  const nThumbs = 7;
  styles.map((style) => {stylethumbs.push(style.photos[0].thumbnail_url)});
  const product = overviewData.overview;
  const thumbs = styles[curStyle].photos;
  const sizeOptions = [];

  const changeStart = (dir) =>{
    if (dir === "up" && startImg+nThumbs<nImg) {
      setStartImg(startImg+1);
    }
    if(dir==="down" && startImg>0) {
      setStartImg(startImg-1);
    }
  }

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
            <div className="thumbnailsPointer">
              {startImg+nThumbs<nImg ? <span id="upPointer" onClick={()=>changeStart("up")} class="material-symbols-outlined">keyboard_arrow_up</span> : <></>}</div>
            <div className="thumbnailsAll">
            {thumbs.map((t,index) => {
              if(index>=startImg && index<startImg+nThumbs) {
                if(index === main) {
                  return (<img className="thumb" id="mainThumb" src={t.thumbnail_url} alt=""/>)
                }
                return (<img className="thumb" onClick={()=>setMain(index)} src={t.thumbnail_url} alt=""/>)
              }}
            )}
            </div>
            <div className="thumbnailsPointer">
              {startImg>0 ? <span id="downPointer" onClick={()=>changeStart("down")} class="material-symbols-outlined">keyboard_arrow_down</span>:<></>}</div>
          </div>
          <div className="mainImgContainer">
            {/* <img src={thumbs[main].url} alt=""
              className="mainImg"/> */}
             <Zoom
                img={thumbs[main].url}
                key={thumbs[main].url}
                zoomScale={3}
                width={600}
                height={600}
              />
            { main>1 ? <span class="material-symbols-outlined" id="leftArrow" onClick={()=>setMain(main-1)}>
              arrow_back_ios
            </span> : <></>}
            {main<nImg-1 ? <span class="material-symbols-outlined" id="rightArrow" onClick={()=>setMain(main+1)}>
              arrow_forward_ios
            </span>: <></>}
          </div>
          <div className="productContainer">
            <div className="productCat"><div className="cat">{product.category}</div></div>
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
          <span className="pink"></span>
          <div className="overviewSlogan">{overviewData.overview.slogan}</div>
          <div className="overviewDesc">{overviewData.overview.description}</div>

        </div>
      </div>
    </section>
  )
}