import React from 'react';
import Confetti from 'react-confetti';

export function FullMode({ onClick }) {
  return (
    <>
      <Confetti recycle={false} numberOfPieces={600} gravity={0.12} />
      <div className="full-mode css-selector slide-top">
        <img className="izi-img" src="https://i.ibb.co/r7chD0y/Group-4-1.png" alt="Group-4-1" />
        <button className="izi-button izi-button-full" onClick={onClick}>
          close
        </button>
      </div>
    </>
  );
}
