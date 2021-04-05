import React, {
  FunctionComponent,
  HTMLProps,
  MutableRefObject,
  useEffect,
  useRef
} from 'react';

export const Collapsible: FunctionComponent<
  { expanded?: boolean } & HTMLProps<HTMLDivElement>
> = (props) => {
  const { children, expanded, ...rest } = props;

  const ref = useRef();
  useCollapsible(ref, expanded || false);

  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
};

export default function useCollapsible(
  maskRef: MutableRefObject<HTMLElement>,
  expanded: boolean
) {
  const firstUpdate = useRef(true);

  useEffect(() => {
    const maskElem = maskRef?.current;

    if (!maskElem) {
      return;
    }

    if (firstUpdate.current) {
      if (!expanded) {
        maskElem.style.height = '0px';
      }
      firstUpdate.current = false;
      return;
    }

    const iniHeight = expanded ? 0 : maskElem.scrollHeight;
    const endHeight = expanded ? maskElem.scrollHeight : 0;

    maskElem.ontransitionend = undefined;

    maskElem.style.height = 'auto';
    maskElem.style.height = iniHeight + 'px';

    // some browsers require a bigger delay to allow transaction animation to occur
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (expanded) {
            maskElem.ontransitionend = (e) => {
              if (e.propertyName === 'height') {
                maskElem.style.height = 'auto';
              }
            };
          }
          maskElem.style.height = endHeight + 'px';
        });
      });
    });

    return function () {
      maskElem.ontransitionend = undefined;
    };
  }, [expanded, maskRef, firstUpdate]);
}
