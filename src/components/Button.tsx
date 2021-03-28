import cls from 'classnames';
import React, { FunctionComponent } from 'react';

export const Button: FunctionComponent<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <button
      className={cls('p-3 bg-maroon text-cream', className, {
        'bg-opacity-20 pointer-events-none': props.disabled
      })}
      {...rest}
    >
      {children}
    </button>
  );
};
