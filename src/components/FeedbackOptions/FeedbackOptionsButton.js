import React from 'react';

const FeedbackOptionsButton = ({ onGood, onNeutral, onBad }) => {
  // handlGood = event => {
  //   console.log('Good');
  //   console.log(event.target);
  //   };
  // handlNeutral = event => {
  //   console.log('Neutral');
  // };
  // handlBad = event => {
  //   console.log('Bad');
  // };

  return (
    <div>
      <button type="button" onClick={onGood}>
        Good
      </button>
      <button type="button" onClick={onNeutral}>
        Neutral
      </button>
      <button type="button" onClick={onBad}>
        Bad
      </button>
    </div>
  );
};


export default FeedbackOptionsButton;
