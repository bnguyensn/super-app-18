import React, { useState, useEffect } from 'react';

import Head from 'next/head';
import Layout from '../components/layout/layout';
import GameArea from '../components/game/GameArea';

import useWord from '../libs/useWord';
import useDefinitions from '../libs/useDefinitions';

export default function Home() {
  const [wordSet, setWordSet] = useState('');
  const [selectedCharbox, setSelectedCharbox] = useState(0);
  const [typedWord, setTypedWord] = useState([]);
  const [points, setPoints] = useState(0);
  const [history, setHistory] = useState([]);

  const {
    data: word,
    error: wordError,
    mutate: mutateWord,
    isValidating: wordIsValidating,
  } = useWord({
    wordSet,
    count: 1,
  });
  const {
    data: definitions,
    error: definitionsError,
    isValidating: definitionsIsValidating,
  } = useDefinitions({
    word,
  });

  // Update charboxes when a new word is received
  useEffect(() => {
    if (word) {
      setTypedWord(Array(word.length).fill(''));
      selectFirstCharbox();
    }
  }, [word, setTypedWord]);

  // Record a correct answer
  useEffect(() => {
    const typedWordJoined = typedWord.join('');

    if (
      word &&
      typedWordJoined &&
      typedWordJoined.toLowerCase() === word.toLowerCase()
    ) {
      const scoreToAdd = word.length * 10;
      setPoints((prevPoints) => prevPoints + scoreToAdd);

      setHistory((prevCompletedWords) => [
        { word, points: scoreToAdd },
        ...prevCompletedWords,
      ]);

      refreshWord();
    }
  }, [word, typedWord, mutateWord]);

  const refreshWord = () => {
    if (!wordIsValidating) {
      mutateWord();
    }
  };

  const selectWordSet = (e) => {
    setWordSet(e.target.value);
  };

  const updateTypedWord = (char, position) => {
    if (typedWord) {
      setTypedWord((curTypedWord) => {
        const newTypedWord = [...curTypedWord];
        newTypedWord[position] = char;
        return newTypedWord;
      });
    }
  };

  const selectFirstCharbox = () => {
    const firstCharbox = document.getElementById(`charbox-0`);

    if (firstCharbox) {
      firstCharbox.focus();
    }
  };

  const selectPrevCharbox = () => {
    const prevPosition = Math.max(selectedCharbox - 1, 0);
    const prevCharbox = document.getElementById(`charbox-${prevPosition}`);

    if (prevCharbox) {
      prevCharbox.focus();
    }
  };

  const selectNextCharbox = () => {
    const nextPosition = Math.min(selectedCharbox + 1, typedWord.length - 1);
    const nextCharBox = document.getElementById(`charbox-${nextPosition}`);

    if (nextCharBox) {
      nextCharBox.focus();
    }
  };

  return (
    <Layout>
      <Head>
        <title>Super App #18 🔥</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      <GameArea
        word={word}
        wordError={wordError}
        wordIsValidating={wordIsValidating}
        refreshWord={refreshWord}
        definitions={definitions}
        definitionsError={definitionsError}
        definitionsIsValidating={definitionsIsValidating}
        typedWord={typedWord}
        updateTypedWord={updateTypedWord}
        selectedCharbox={selectedCharbox}
        setSelectedCharbox={setSelectedCharbox}
        selectNextCharbox={selectNextCharbox}
        selectPrevCharbox={selectPrevCharbox}
        wordSet={wordSet}
        selectWordSet={selectWordSet}
        points={points}
        history={history}
      />
    </Layout>
  );
}
