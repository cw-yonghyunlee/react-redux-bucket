import React from 'react';

interface CircleButtonProps {
  children: React.ReactNode;
  type?: 'circle' | 'default';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button(props: CircleButtonProps): JSX.Element {
  const { children, onClick, type = 'default' } = props;
  return (
    <button className={type} onClick={onClick}>{children}</button>
  )
}

export default Button;
