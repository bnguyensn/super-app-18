import React from 'react';

export default function Header() {
  return (
    <footer className="fixed bottom-0 text-center w-full bg-blue-500 text-white">
      Made by{' '}
      <a
        className="text-white"
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/bnguyensn"
      >
        @bnguyensn
      </a>
    </footer>
  );
}
