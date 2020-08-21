import useSwr from 'swr';

const BASE_URL = 'https://owlbot.info/api/v4/dictionary';

const definitionsFetcher = async (url) => {
  const res = await fetch(url, {
    headers: {
      Authorization: 'Token 223519a989ceebb9afd10cb0b6dde598ec9a9afd',
    },
  });

  if (!res.ok) {
    throw new Error('Could not fetch definitions');
  }

  const json = await res.json();
  return json.definitions;
};

export default function useDefinitions({ word }) {
  return useSwr(
    () => {
      if (!word) return null;

      return `${BASE_URL}/${word}`;
    },
    definitionsFetcher,
    {
      shouldRetryOnError: false,
      revalidateOnFocus: false,
    }
  );
}
