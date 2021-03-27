import ReactDOM from 'react-dom';
import React, { useRef, useState } from 'react';
import useCollapsible from './useCollapsible';

function Example() {
  const ref = useRef<HTMLDivElement>();
  const ref2 = useRef<HTMLDivElement>();
  const [state, setState] = useState(false);

  useCollapsible(ref, state);
  useCollapsible(ref2, !state);
  return (
    <div>
      <button onClick={() => setState(!state)}>Toggle</button>

      <div
        style={{
          overflow: 'hidden',
          background: 'red',
          transition: '0s'
        }}
        ref={ref}
      >
        <h1>My Mask</h1>
        <h1>My Mask</h1>
        <h1 className=" ">My Mask</h1>
        <h1>My Mask</h1>
      </div>

      <div style={{ overflow: 'hidden', transition: '1s' }} ref={ref2}>
        <h1>My Other Mask</h1>
        <h1>My Other Mask</h1>
        <h1>My Other Mask</h1>
        <h1>My Other Mask</h1>
      </div>
    </div>
  );
}

ReactDOM.render(<Example />, document.getElementById('app'));
