import React from 'react';
import clsx from 'clsx';

import styles from './charbox.module.css';

const A_TO_Z_CHARCODE_RANGE = {
  min: 97,
  max: 122,
};

const isAlphabetical = (char) => {
  const charCode = char.toLowerCase().charCodeAt(0);
  return (
    charCode >= A_TO_Z_CHARCODE_RANGE.min &&
    charCode <= A_TO_Z_CHARCODE_RANGE.max
  );
};

export default function Charbox({
  id,
  position,
  char,
  curChar,
  selected,
  setSelectedCharbox,
  selectPrevCharbox,
  selectNextCharbox,
  updateTypedWord,
}) {
  const handleFocus = () => {
    setSelectedCharbox(position);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Delete' || e.key === 'Backspace') {
      updateTypedWord('', position);
      return;
    }

    if (e.key === 'ArrowLeft') {
      selectPrevCharbox();
      return;
    }

    if (e.key === 'ArrowRight') {
      selectNextCharbox();
      return;
    }

    if (e.key.length > 1) {
      return;
    }

    if (isAlphabetical(e.key)) {
      updateTypedWord(e.key, position);
      selectNextCharbox();
    }
  };

  return (
    <div
      id={id}
      className={clsx(
        styles.charbox,
        !curChar && styles.empty,
        selected && styles.selected,
        curChar === char && styles.correct
      )}
      tabIndex={0}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
    >
      {curChar}
    </div>
  );
}
