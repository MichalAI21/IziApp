import React from 'react';
import Confetti from 'react-confetti';
/*global chrome*/

export function FullMode({ onClick }) {
  return (
    <>
      <Confetti recycle={false} numberOfPieces={600} gravity={0.12} />
      <div className="full-mode full-mode-animations">
        <img className="izi-img" src={chrome.runtime.getURL('images/izi.png')} alt="Group-4-1" />
        <button className="izi-button izi-button-full" onClick={onClick}>
          close
        </button>
      </div>
    </>
  );
}
