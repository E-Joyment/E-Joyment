import React from 'react';

export default function AnswerPhotoGalleryImage({ url }) {
  // function handleClick() {
  //   if (setphotoModalURL !== false) {
  //     setphotoModalURL(url);
  //     document.getElementById('answer-modal').style.display = 'block';
  //   }
  // }

  return (
    <figure>
      <img className="answer-photo" src={url} alt="user uploaded pic" />
    </figure>
  );
}