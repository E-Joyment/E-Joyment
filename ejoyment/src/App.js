import React from 'react';
import Nav from './components/nav/Nav.js';
import Overview from './components/overview/Overview.js';
import Footer from './components/footer/Footer.js';
import RelatedProducts from './components/related/Related.js';
import { useState, createContext, useEffect} from "react";

export const PropIdContext = createContext();

function App() {
  // const [id, setId] = useState('40348');
  // const [allRatings, setAllRatings] = useState(0);
  // const [curPhoto, setCurPhoto] = useState('');
  // const [styleIndx, setStyleIndx] = useState(0);
  return (
    <section>
      <Nav/>
      <Overview/>
       {/* <PropIdContext.Provider value={{id, setId, allRatings, setAllRatings, curPhoto, setCurPhoto, styleIndx, setStyleIndx}}></PropIdContext.Provider> */}
      <RelatedProducts />
      <Footer/>
    </section>);

}

export default App;
