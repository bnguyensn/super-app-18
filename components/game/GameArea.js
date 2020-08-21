import React from 'react';

import ControlPanel from '../ControlPanel';
import CharboxRow from '../CharboxRow';
import Charbox from '../Charbox';

export default function GameArea({
  word,
  wordError,
  wordIsValidating,
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
  definitionsIsValidating,
  points,
}) {
  const definitionEls =
    wordIsValidating || definitionsIsValidating ? (
      <li>Loading... ⏳</li>
    ) : definitionsError ? (
      <li>No definitions found... 😥 Please refresh the word</li>
    ) : definitions ? (
      definitions.length > 0 ? (
        definitions.map((d) => (
          <li key={d.definition}>{`${d.type ?? ''} - ${d.definition}`}</li>
        ))
      ) : (
        <li>No definitions found... 😥 Please refresh the word</li>
      )
    ) : (
      <li>Loading... ⏳</li>
    );

  return (
    <div>
      <ControlPanel
        wordSet={wordSet}
        selectWordSet={selectWordSet}
        refreshWord={refreshWord}
      />

      <div className="mb-8">
        <h5>Points</h5>
      </div>

      <div className="mb-8">
        <h5>Definition</h5>
        <ol className="list-decimal ml-4">{definitionEls}</ol>
      </div>

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
