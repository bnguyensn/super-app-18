import useSWR from 'swr';

// https://noopschallenge.com/challenges/wordbot
const BASE_URL = 'https://api.noopschallenge.com/wordbot';

const wordFetcher = async (url) => {
  const res = await fetch(url);
  const json = await res.json();

  return json.words[0];
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
