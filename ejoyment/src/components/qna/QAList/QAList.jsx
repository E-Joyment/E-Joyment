import React from 'react';
import QAListEntry from '../QAListEntry/QAListEntry';

export default function QAList({ qs, qsLeft, onHandleLoad, setModal }) {
  function handleClick() {
    setModal({ modalName: 'addq' });
    document.getElementById('modal').style.display = 'block';
  }

  return (
    <div>
      <ul className='qa-list'>
        {qs.map((q, index) => <QAListEntry key={index} q={q} setModal={setModal} />)}
      </ul>

      <div className="qa-actions">
        <a onClick={handleClick} className="btn btn-primary">Add A Question</a>
        {qsLeft !== 0 && <a onClick={onHandleLoad} className="btn btn-outline">More Answered Questions</a>}
      </div>
    </div>
  )
}