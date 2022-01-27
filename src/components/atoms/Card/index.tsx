import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

function Card(props: CardProps): JSX.Element {
  const { children } = props;
  return (
    <article className="item-card">
      { children }
    </article>
  );
}

export default Card;
