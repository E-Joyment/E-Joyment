import React, { useState } from 'react';
import PhotoUploader from './PhotoUploader.jsx';

export default function AddAnswerModal({ productName, questionID, questionBody}) {

  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);

  function handleQuestionChange(e) {
    setBody(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="modal-box modal-adda">
        <header>
          <h3 className="heading heading-tertiary">Submit Your Answer</h3>
          <span className="subheading">{productName}</span>
          <span className="subheading">{questionBody}</span>
        </header>

        <main>
          <form className="modal-form" onSubmit={handleSubmit} >
            <label>Your Answer *
              <textarea className="modal-input" onChange={handleQuestionChange} name="answer_body" maxLength="1000" placeholder="Write your answer here..." required></textarea>
            </label>

            <label>Nickname *
              <input className="modal-input" onChange={handleNameChange} name="answerer_name" type="text" placeholder="Example: jack543!" maxLength="60" required />
              <span className="input-description">For privacy reasons, do not use your full name or email address</span>
            </label>

            <label>Email *
              <input className="modal-input" onChange={handleEmailChange} type="email" maxLength="60" placeholder="Why did you like the product or not?" required />
              <span className="input-description">For authentication reasons, you will not be emailed</span>
            </label>

            <label>Upload images
              <PhotoUploader photos={photos} setPhotos={setPhotos} />
            </label>

            <input className="btn btn-primary" type="submit" value="Submit Your Answer" />
          </form>
        </main>
      </div>
  );
}
