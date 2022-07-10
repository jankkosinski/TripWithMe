import React from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';

const getRatingStart = (number) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < number) stars.push(<BsStarFill size={15}></BsStarFill>);
    else stars.push(<BsStar size={15}></BsStar>);
  }
  return stars;
};

export default function ReviewBox({ review }) {
  const ratingStars = getRatingStart(review.stars);
  return (
    <div className='review'>
      <div className='review__content'>
        <div className='review__content__heading'>
          <img
            className='review__content__heading__image'
            src={review.image}
            alt={review.image}
          />
          <div className='review__content__heading__rating'>{ratingStars}</div>
        </div>
        <div className='review__content__info'>
          <div className='review__content__info__name'>{review.name}</div>
        </div>
        <div className='review__content__info__comment'>{review.comment}</div>
      </div>
    </div>
  );
}
