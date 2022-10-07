import { useEffect, useState } from 'react';
import { qandaData } from '../../assets/qandadata.js';
import QASearch from './QASearch/QASearch';
import QAList from './QAList/QAList';
import './qna.css';

export default function QuestionsAndAnswers({ productID, setModal }) {
  const [qaData, setQAData] = useState([]);
  const [qs, setQs] = useState([]);
  const [displayQs, setDisplayQs] = useState([]);
  const [qsLeft, setQsLeft] = useState(0);
  const [keyword, setKeyword] = useState('');

  function loadMoreQs() {
    setDisplayQs([...displayQs, ...qs.slice(displayQs.length, displayQs.length + 2)]);
  }

  useEffect(() => {
    if (keyword.length >= 3) {
      const results = qaData
        .filter(
          (q) => q.question_body.toLowerCase().includes(keyword.toLowerCase())
        )
        .map(
          (q) => {
            let newQ = JSON.parse(JSON.stringify(q));
            newQ.question_body = newQ.question_body.replace(
              new RegExp(keyword, 'gi'),
              (match) => `<mark class="search-match">${match}</mark>`
            )
            return newQ;
          }
        )
      setQs(results);
      setDisplayQs(results.slice(0, 2));
    } else {
      setQs(qaData);
      setDisplayQs(qaData.slice(0, 2));
    }
  }, [keyword]);

  useEffect(() => {
    qandaData.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
    setQAData(qandaData);
    setQs(qandaData);
    setDisplayQs(qandaData.slice(0, 2));
  }, []);

  useEffect(() => {
    setQsLeft(qs.length - displayQs.length);
  }, [displayQs, qs.length]);

  return (
    <section id="section-qanda">
      <div className="container">
        <h2 className="heading heading-secondary">QUESTIONS & ANSWERS</h2>
        <QASearch keyword={keyword} setKeyword={setKeyword} />
        <QAList
          qs={displayQs}
          qsLeft={qsLeft}
          onHandleLoad={loadMoreQs}
          setModal={setModal}
        />
      </div>
    </section>
  )
}