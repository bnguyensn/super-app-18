import React from 'react';
import wordSets from './wordSets.json';

import styles from './control-panel.module.css';

export default function ControlPanel({ wordSet, selectWordSet, refreshWord }) {
  return (
    <div className={styles['control-panel']}>
      <button className={styles.control} onClick={refreshWord}>
        Refresh word
      </button>
      <select
        className={styles.control}
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
  );
}
