import React, { useRef, useState } from 'react';
import { Button } from '../components/Button';
import useCollapsible from '../useCollapsible';

const TEXT_STYLES = ['text-xs', 'text-xl', 'text-3xl'];

function getTextStyles(i) {
  return TEXT_STYLES[i % TEXT_STYLES.length];
}

export default function Example1() {
  const ref = useRef<HTMLDivElement>();
  const [state, setState] = useState(true);
  const [items, setItems] = useState(5);

  useCollapsible(ref, state);

  return (
    <div>
      <div className="flex space-x-3 my-3">
        <Button
          onClick={() => {
            setState(!state);
          }}
          disabled={items > 30}
        >
          Expand / Collapse
        </Button>
        <Button
          onClick={() => {
            setItems(items + 1);
          }}
        >
          Add item
        </Button>
        <Button
          disabled={items <= 1}
          onClick={() => {
            setItems(items - 1);
          }}
        >
          Remove Item
        </Button>
      </div>
      <div
        ref={ref}
        className="overflow-hidden duration-500 bg-cream mt-3 divide-y-2 divide-tangerine divide-opacity-50"
      >
        {Array(items)
          .fill(0)
          .map((_, i) => {
            return (
              <div key={i} className={'p-3 text-maroon ' + getTextStyles(i)}>
                {i + 1} - Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nunc ornare convallis finibus. Aliquam arcu sapien, porta
                malesuada sagittis rhoncus, auctor at magna. Suspendisse
                potenti. Ut vel euismod elit. Morbi ac neque vitae dolor
                vestibulum auctor. Curabitur sed bibendum ex. Nulla hendrerit
                dui metus, et rhoncus neque faucibus eu.
              </div>
            );
          })}
      </div>
    </div>
  );
}
