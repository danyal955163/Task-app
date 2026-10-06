'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <p style={{ whiteSpace: 'pre-wrap', fontSize: '12px' }}>{error.stack}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
