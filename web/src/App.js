import React, { useEffect, useState } from 'react';

function App() {
  const [images, setImages] = useState(null);
  useEffect(() => {
    fetch('/api/parent-images').then(x => x.json()).then(setImages)
  }, []);

  const [pair, setPairResult] = useState(null);
  const [child, setChild] = useState(null);

  function setPair(a, b) {
    setPairResult([a, b]);

    fetch(`/api/mate?parent1=${encodeURIComponent(a)}&parent2=${encodeURIComponent(b)}`).then(x => x.json()).then(setChild)
  }

  if (!images) return <div>Loading...</div>;
  return (
    <div className="App">
      <h1>Initial parent</h1>

      <img height="200" src={`/api/${images.initialParent}`} />

      {!pair ? <>
      <h1>Choose a mate</h1>
      {images.choices.map(i => <img height="200" key={i} src={`/api/${i}`} onClick={() => setPair([images.initialParent, i])}/>)}
      </> : <>
        <h1>Your pair</h1>
        {pair.map(i => <img height="200" key={i} src={`/api/${i}`} onClick={() => setPair(images.initialParent, i)}/>)}
      </>}

      <code>
        {JSON.stringify(child, null, 2)}
      </code>
    </div>
  );
}

export default App;
