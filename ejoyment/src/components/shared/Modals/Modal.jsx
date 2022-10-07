import React from 'react';
import './modal-styles.css';

import AddQuestionModal from './AddQuestionModal.jsx';
import AddAnswerModal from './AddAnswerModal.jsx';
// import AddReviewModal from './AddReviewModal.jsx';

export default function Modal({ productID, productName, modal }) {
  function renderModal({ modalName, modalData }) {
    switch (modalName) {
      case 'addq':
        return <AddQuestionModal productID={productID} productName={productName} />;
      case 'adda':
        return <AddAnswerModal productName={productName} questionID={modalData.question_id} questionBody={modalData.question_body} />;
      // case 'review':
      //   return <AddReviewModal productID={productID} productName={productName} />;
      default:
        return <div />;
    }
  }

  function reset() {
    const allInputs = document.querySelectorAll('.modal-input');
    allInputs.forEach((i) => { i.value = ''; });
  }

  function handleClick(e) {
    const modalMask = document.getElementById('modal');
    if (e.target === modalMask) {
      modalMask.style.display = 'none';
      reset();
    }
  }

  return (
    <div id="modal" className="modal" onClick={handleClick}>
      {renderModal(modal)}
    </div>
  );
}
