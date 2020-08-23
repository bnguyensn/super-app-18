import React from 'react';

export default function Header() {
  return (
    <footer className="fixed bottom-0 flex flex-col px-1 text-center w-full bg-blue-500 text-white">
      <div>
        <span>
          Made by{' '}
          <a
            className="text-white"
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/bnguyensn"
          >
            @bnguyensn
          </a>
        </span>
        <span>{' ✨ '}</span>
        <span>
          <a
            className="text-white"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/bnguyensn/super-app-18"
          >
            Source code
          </a>
        </span>
      </div>
      <div>
        <span>{'APIs used: '}</span>
        <span>
          <a
            className="text-white"
            target="_blank"
            rel="noreferrer"
            href="https://noopschallenge.com/challenges/wordbot"
          >
            GitHub&#39;s wordbot
          </a>
        </span>
        <span>{' and '}</span>
        <span>
          <a
            className="text-white"
            target="_blank"
            rel="noreferrer"
            href="https://owlbot.info"
          >
            Owlbot&#39;s dictionary
          </a>
        </span>
      </div>
    </footer>
  );
}
