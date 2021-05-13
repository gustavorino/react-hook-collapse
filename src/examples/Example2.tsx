import React, { useState } from 'react';
import { Collapsible } from '../useCollapsible';

export default function Example2() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)}>Toggle</button>
      <div className="block md:hidden">
        <Collapsible
          className="overflow-hidden transition-all duration-500"
          expanded={open}
        >
          <div>
            {Array(10)
              .fill(0)
              .map((_, i) => {
                return (
                  <div key={i} className="py5">
                    Desktop
                  </div>
                );
              })}
          </div>
        </Collapsible>
      </div>
      <div className="hidden md:block">
        <Collapsible
          className="overflow-hidden transition-all duration-500"
          expanded={open}
        >
          {Array(10)
            .fill(0)
            .map((_, i) => {
              return <div className="py5">Mobile</div>;
            })}
        </Collapsible>
      </div>
    </div>
  );
}
