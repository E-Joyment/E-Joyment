import React, { useState } from 'react';
import Nav from './components/nav/Nav.js';
import QuestionsAndAnswers from './components/qna/QuestionsAndAnswers';
import Modal from './components/shared/Modals/Modal.jsx';

function App() {
  // By default, modal is an empty object {}
  // When using setModal, the syntax is setModal({ modalName, modalData })
  // modalName: Required; a string, decides which modal content to render
  // modalData: Optional; an object, should contain some data you need for the modal
  // Example 1 - setModal: line 14 @ './QuestionsAndAnswers/QAListEntry.jsx'
  // Example 2 - redernModal: line 8 @ './helper/Modals/Modals.jsx'
  const [modal, setModal] = useState({});

  return (
    <>
      <section>
        <Nav/>
      </section>
      <QuestionsAndAnswers
        productID={40348}
        setModal={setModal}
      />
      <Modal
        productID={40348}
        productName={'Heir Force Ones'}
        modal={modal}
      />
    </>
  );
}

export default App;
