import React, { useState } from 'react';

export default function ReportButton() {
  const [isReported, setReported] = useState('');

  function handleClick() {
    setReported(true);
  }

  return (
    isReported
      ? <span>Reported</span>
      : <span onClick={handleClick} className="style-underline">Report</span>
  );
}