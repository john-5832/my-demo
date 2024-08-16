import React, { useState, useEffect } from 'react';

const DocumentTitleUpdater = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = ` ${count} `;
  }, [count]); // Runs every time count changes

  return (
    <div>
      <p>Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default DocumentTitleUpdater;
