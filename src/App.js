import { useState } from 'react';

import { FaStar } from "react-icons/fa";
import {
  sadIcon,
  confusedIcon,
  inLoveIcon,
  laughingIcon,
  smileIcon,
  sleepingIcon
} from './assets/index';

import "./App.css"
import { EmojiWrapper } from './styles';

const ratingIcons = [
  sadIcon,
  confusedIcon,
  smileIcon,
  laughingIcon,
  inLoveIcon
]

function App() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {rating ? (
        <EmojiWrapper rating={rating}>
          {ratingIcons.map(icon => (
            <img src={icon} />
          ))}
        </EmojiWrapper>
      ): (
        <EmojiWrapper sleeping>
          <img src={sleepingIcon} />
        </EmojiWrapper>
      )}

      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={starValue}
              onClick={() => setRating(starValue)}
            />

            <FaStar
              className="star"
              size={100}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(null)}
              color={starValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
            />
          </label>
        )
      })}
    </div>
  );
}

export default App;
