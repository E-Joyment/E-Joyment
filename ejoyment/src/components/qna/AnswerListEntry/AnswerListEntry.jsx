import React from 'react';
import AnswerPhotoGallery from '../AnswerPhotos/AnswerPhotoGallery';
import Helpful from '../Helpful/Helpful';
import ReportButton from '../ReportButton/ReportButton';
import { formatDate } from '../../../utils/formatDate';

export default function AnswerListEntry({ a }) {
  return (
    <li className="answer-content">
      <p className="answer-text">{a.body}</p>

      {!!a.photos.length && <AnswerPhotoGallery urls={a.photos} />}

      <div className="answer-info">
        <span>by {a.answerer_name}, {formatDate(a.date)}</span>
        |
        <Helpful count={a.helpfulness} />
        |
        <ReportButton />
      </div>
    </li>
  )
}