import React from 'react';

import clsx from 'clsx';
import wordSets from './wordSets';

export default function ControlPanel({
  wordSet,
  selectWordSet,
  skipWord,
  disableSkipWord,
}) {
  return (
    <div>
      <div className="container mx-auto p-4 flex justify-center items-center space-x-4">
        <button
          className={clsx(
            'btn',
            disableSkipWord ? 'btn-disabled' : 'btn-primary'
          )}
          onClick={skipWord}
          disabled={disableSkipWord}
        >
          Skip word
        </button>

        <select
          name="wordSets"
          id="word-set-select"
          value={wordSet}
          onChange={selectWordSet}
        >
          {wordSets.map((wordSet) => (
            <option key={wordSet} value={wordSet}>
              {wordSet}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
