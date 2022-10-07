import React, { useState } from 'react';

export default function Helpful({ count }) {
  const [localCount, setLocalCount] = useState(count);
  const [isClicked, setClicked] = useState('');

  function handleClick() {
    setLocalCount(localCount + 1);
    setClicked(true);
  }

  return (
    <span className='helpful'>Helpful? { isClicked ? <span>Yes</span> : <span onClick={handleClick} className="style-underline">Yes</span> } ({ localCount })</span>
  );
}
