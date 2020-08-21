import useSWR from 'swr';

// https://noopschallenge.com/challenges/wordbot
const BASE_URL = 'https://api.noopschallenge.com/wordbot';

const wordFetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Could not fetch word');
  }

  const json = await res.json();
  const word = json.words[0];

  // Strip spaces from the word
  return word.replace(' ', '');
};

export default function useWord({ wordSet }) {
  return useSWR(
    () => {
      let url = `${BASE_URL}?count=1`;

      if (wordSet) url += `&set=${wordSet}`;

      return url;
    },
    wordFetcher,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  );
}
