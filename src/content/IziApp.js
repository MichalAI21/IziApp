import React, { useState } from 'react';
import { surpriseFunction } from './surpriseFunction';
import { FullMode } from './FullMode';

export function IziApp() {
  const [fullMode, setFullMode] = useState(false);
  const [runOnce, setRunOnce] = useState(false);

  function onClickFunc() {
    if (!runOnce) {
      const allElements = document.querySelectorAll('a, span, h1, h2, h3, p, #text');
      surpriseFunction(allElements);
    }
    setFullMode(true);
    setRunOnce(true);
  }

  return fullMode ? (
    <FullMode onClick={() => setFullMode(false)} />
  ) : (
    <div className="initial-div">
      <button className="izi-button" onClick={onClickFunc}>
        click me!
      </button>
    </div>
  );
}
