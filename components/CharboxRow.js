import React from 'react';

export default function CharboxRow({ children }) {
  return (
    <div
      className="flex flex-wrap justify-center"
      style={{
        minHeight: '4.5rem',
      }}
    >
      {children}
    </div>
  );
}
