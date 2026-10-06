'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    console.log('HOME PAGE MOUNTED');
  }, []);

  return (
    <div style={{ padding: '40px' }}>
      <h1>HOME PAGE</h1>
      <p>If you see this for more than 1 second, hydration works.</p>
    </div>
  );
}
