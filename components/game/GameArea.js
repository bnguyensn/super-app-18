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
  skipWord,
  definitions,
  definitionsError,
  definitionsIsValidating,
  points,
  history,
}) {
  const definitionEls =
    wordIsValidating || definitionsIsValidating ? (
      <li>Loading... ⏳</li>
    ) : definitionsError ? (
      <li>No definitions found... 😥 Please skip this word</li>
    ) : definitions ? (
      definitions.length > 0 ? (
        definitions.map((d) => (
          <li key={d.definition}>{`${d.type ?? ''} - ${d.definition}`}</li>
        ))
      ) : (
        <li>No definitions found... 😥 Please skip this word</li>
      )
    ) : (
      <li>An error occurred... 😥 Please skip this word</li>
    );

  return (
    <div className="container mx-auto px-4 flex flex-col">
      <ControlPanel
        wordSet={wordSet}
        selectWordSet={selectWordSet}
        skipWord={skipWord}
        disableSkipWord={wordIsValidating || definitionsIsValidating}
      />

      <div>
        <div className="mb-4 text-center">
          <h3 className="text-blue-500 font-bold">{points}</h3>
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

        <div className="my-4">
          <h5>Definition{definitions && definitions.length > 1 && 's'}</h5>
          <ol className="list-decimal ml-4">{definitionEls}</ol>
        </div>

        <div className="mt-4 mb-16">
          <h5>History</h5>
          <ol className="list-decimal ml-4" reversed>
            {history.map(({ word, points }) => (
              <li key={word}>
                {`${word} ${points ? `(+${points} points)` : '(skipped)'}`}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
