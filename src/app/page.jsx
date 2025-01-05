'use client'

import React from 'react';

export default function Home() {
  const [count, setCount] = React.useState(0);

  return (
      <div>
        <h1>Welcome to Next.js!</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
  );
}
