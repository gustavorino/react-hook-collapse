# REACT HOOK COLLAPSE

> A lighweight and minimalist HTML react hook collapsible that uses CSS transitions

## Installation

```bash
$ npm install react-hook-collapse
```

---

## [Examples](https://gustavorino.github.io/react-hook-collapse/)

---

## Usage

Example #1 - using Ref and Hook:

```js
import useCollapse, { Collapsible } from 'react-hook-collapse';
import React, { useState, useRef } from 'react';

function MyComponent() {
  const ref = useRef();
  const [state, setState] = useState(false);
  useCollapse(ref, state);

  return (
    <section>
      <button
        onClick={() => {
          setState(!state);
        }}
      >
        Toggle
      </button>
      <div ref={ref} style={{ overflow: 'hidden', transition: '0.3s' }}>
        ...content...
      </div>
    </section>
  );
}
```

Example #2 - using the baked Collapsible component:

```js
import { Collapsible } from 'react-hook-collapse';
import React, { useState, useRef } from 'react';

function MyComponent() {
  const [state, setState] = useState(false);

  return (
    <section>
      <button
        onClick={() => {
          setState(!state);
        }}
      >
        Toggle
      </button>
      <Collapsible
        expanded={state}
        style={{ overflow: 'hidden', transition: '0.3s' }}
      >
        ...content...
      </Collapsible>
    </section>
  );
}
```

---

## Features

- CSS transition based, you can set the animation duration using your favorite CSS framework.
- Performs better than JS based animations.
- No CSS Classes, no external styles.
- Zero dependency
- Doesn't manipulate component Props.
- Doesn't stack animations on fast toggle.
- Doesn't lock the mask height. Sets to 'auto' when animation is finished.

---

## Browser support

https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/transitionend_event#browser_compatibility
