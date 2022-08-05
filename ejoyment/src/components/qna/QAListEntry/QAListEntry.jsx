import React from 'react';
import AnswerList from '../AnswerList/AnswerList';
import Helpful from '../Helpful/Helpful';

export default function QAListEntry({ q, setModal }) {
  function handleAddAnswer() {
    setModal({ modalName: 'adda', modalData: { question_id: q.question_id, question_body: q.question_body } });
    document.getElementById('modal').style.display = 'block';
  }

  function createMarkup(html) {
    return { __html: html };
  }

  return (
    <li>
      <div className="question">
        <p>Q:</p>

        <div className="question-container">
          <p className="question-title" dangerouslySetInnerHTML={createMarkup(q.question_body)} />

          <div className="question-actions">
            <Helpful count={q.question_helpfulness} />
            |
            <span onClick={handleAddAnswer} className="underline">Add Answers</span>
          </div>
        </div>
      </div>

      <AnswerList answers={q.answers} />
    </li>
  );
}
