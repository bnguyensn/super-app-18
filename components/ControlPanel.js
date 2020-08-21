import React from 'react';

import wordSets from './wordSets';
import clsx from 'clsx';

export default function ControlPanel({
  wordSet,
  selectWordSet,
  refreshWord,
  disableRefreshWord,
}) {
  return (
    <div>
      <div className="container mx-auto p-4 flex justify-center items-center space-x-4">
        <button
          className={clsx(
            'btn',
            disableRefreshWord ? 'btn-disabled' : 'btn-primary'
          )}
          onClick={refreshWord}
          disabled={disableRefreshWord}
        >
          Refresh word
        </button>

        <select
          name="wordSets"
          id="word-set-select"
          value={wordSet}
          onChange={selectWordSet}
        >
          <option value="">-- Select a word set --</option>
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
