import React from 'react';
import { view } from 'redux-elm';

export default view(({ model, dispatch }) => {
  const increase = () => dispatch({ type: 'Increase' });
  const decrease = () => dispatch({ type: 'Decrease' });

  return (
    <div>
      <h1>Hello, World!</h1>
      <h2>Count: {model.count}</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
});
