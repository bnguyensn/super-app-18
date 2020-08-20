import React, { useState, useEffect } from 'react';

import Head from 'next/head';
import Layout from '../components/layout/layout';
import GameArea from '../components/game/game-area';

import useWord from '../libs/useWord';
import useDefinitions from '../libs/useDefinitions';

export default function Home() {
  const [wordSet, setWordSet] = useState('');
  const [selectedCharbox, setSelectedCharbox] = useState(0);
  const [typedWord, setTypedWord] = useState([]);
  const [points, setPoints] = useState(0);

  const { data: word, error: wordError, mutate: mutateWord } = useWord({
    wordSet,
    count: 1,
  });
  const { data: definitions, error: definitionsError } = useDefinitions({
    word,
  });

  // Update charboxes when a new word is received
  useEffect(() => {
    if (word) {
      setTypedWord(Array(word.length).fill(''));
    }
  }, [word]);

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
      mutateWord();
    }
  }, [word, typedWord, mutateWord]);

  const refreshWord = () => {
    mutateWord();
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
        refreshWord={refreshWord}
        typedWord={typedWord}
        updateTypedWord={updateTypedWord}
        selectedCharbox={selectedCharbox}
        setSelectedCharbox={setSelectedCharbox}
        selectNextCharbox={selectNextCharbox}
        selectPrevCharbox={selectPrevCharbox}
        wordSet={wordSet}
        selectWordSet={selectWordSet}
        definitions={definitions}
        definitionsError={definitionsError}
        points={points}
      />
    </Layout>
  );
}
