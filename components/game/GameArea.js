import React from 'react';

import ControlPanel from '../ControlPanel';
import CharboxRow from '../CharboxRow';
import Charbox from '../Charbox';

export default function GameArea({
  word,
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
      <li>An error occurred... 😥 Please refresh the word</li>
    );

  return (
    <div>
      <ControlPanel
        wordSet={wordSet}
        selectWordSet={selectWordSet}
        refreshWord={refreshWord}
      />

      <div className="container mx-auto flex flex-col">
        <div className="mb-4 text-center">
          <h5>
            <span className="text-blue-500 font-bold">{points}</span>
          </h5>
        </div>

        <div className="mb-8">
          <h5>Definition</h5>
          <ol className="list-decimal ml-4">{definitionEls}</ol>
        </div>

        <CharboxRow>
          {word &&
            !wordIsValidating &&
            definitions &&
            !definitionsIsValidating &&
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
    </div>
  );
}
