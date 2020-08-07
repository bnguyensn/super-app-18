import React from 'react';

import ControlPanel from '../ControlPanel';
import CharboxRow from '../CharboxRow';
import Charbox from '../Charbox';

import styles from './game-area.module.css';

export default function GameArea({
  word,
  wordError,
  typedWord,
  updateTypedWord,
  selectedCharbox,
  setSelectedCharbox,
  selectPrevCharbox,
  selectNextCharbox,
  wordSet,
  selectWordSet,
  refreshWord,
  definitions,
  definitionsError,
  points,
}) {
  return (
    <div className={styles.gameArea}>
      <ControlPanel
        wordSet={wordSet}
        selectWordSet={selectWordSet}
        refreshWord={refreshWord}
      />

      <p>Word: {word}</p>

      <p>Points: {points}</p>

      <p>Error: {wordError && JSON.stringify(wordError)}</p>

      <p>
        Definition:{' '}
        {definitions && definitions.length > 0
          ? `${definitions[0].type ?? ''} - ${definitions[0].definition}`
          : ''}
      </p>

      <p>
        Definitions error:{' '}
        {definitionsError && JSON.stringify(definitionsError)}
      </p>

      <CharboxRow>
        {word &&
          word
            .split('')
            .map((char, i) => (
              <Charbox
                key={`${char}${i}`}
                id={`charbox-${i}`}
                position={i}
                char={char}
                curChar={typedWord[i]}
                selected={selectedCharbox === i}
                setSelectedCharbox={setSelectedCharbox}
                selectPrevCharbox={selectPrevCharbox}
                selectNextCharbox={selectNextCharbox}
                updateTypedWord={updateTypedWord}
              />
            ))}
      </CharboxRow>
    </div>
  );
}
