import React from 'react';
import AnswerPhotoGallery from '../../qna/AnswerPhotos/AnswerPhotoGallery.jsx';

export default function PhotoUploader({ photos, setPhotos }) {
  function uploadImage(files) {
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', 'eglsu37j');

    // axios.post('https://api.cloudinary.com/v1_1/dukhnqzsc/image/upload', formData)
    //   .then((res) => { setPhotos([...photos, res.data.url]); })
    //   .catch((err) => { console.error(err); });
  }

  function handleChange(e) {
    uploadImage(e.target.files);
  }

  return (
    <div>
      {photos.length < 5 && <input type="file" onChange={handleChange} />}
      {photos.length === 0 || <AnswerPhotoGallery urls={photos} setphotoModalURL={false} />}
    </div>
  )
}

