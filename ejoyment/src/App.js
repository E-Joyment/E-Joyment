import React from 'react';
import Nav from './components/nav/Nav.js';
import RelatedProducts from './components/related/Related.js';
import { useState, createContext, useEffect} from "react";

export const PropIdContext = createContext();

function App() {
  const [id, setId] = useState('40348');
  const [allRatings, setAllRatings] = useState(0);
  const [curPhoto, setCurPhoto] = useState('');
  const [styleIndx, setStyleIndx] = useState(0);
  return (
    <section>
       <PropIdContext.Provider value={{id, setId, allRatings, setAllRatings, curPhoto, setCurPhoto, styleIndx, setStyleIndx}}></PropIdContext.Provider>
      {/* <Nav/> */}
      <RelatedProducts />
    </section>
  );
}

export default App;
