import React, { useState } from 'react';

export default function AddQuestionModal({ productID, productName }) {
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleQuestionChange(e) {
    setBody(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  return (
    <div className="modal-box modal-addq">
      <header>
        <h3 className="heading heading-tertiary">Ask Your Questions</h3>
        <span className="subheading">{productName}</span>
      </header>

      <main>
        <form className="modal-form" onSubmit={handleSubmit} >
          <label>Your Question *
            <textarea className="modal-input" onChange={handleQuestionChange} name="question_body" maxLength="1000" placeholder="Write your question here..." required></textarea>
          </label>

          <label>Nickname *
            <input className="modal-input" onChange={handleNameChange} name="asker_name" type="text" placeholder="Example: jackson11!" maxLength="60" required />
            <span className="input-description">For privacy reasons, do not use your full name or email address</span>
          </label>

          <label>Email *
            <input className="modal-input" onChange={handleEmailChange} type="email" maxLength="60" placeholder="Why did you like the product or not?" required />
            <span className="input-description">For authentication reasons, you will not be emailed</span>
          </label>

          <input className="btn btn-primary" type="submit" value="Submit Your Question" />
        </form>
      </main>
    </div>
  )
}