import React from 'react';

type Props = { children: React.ReactNode; className?: string };
const Card: React.FC<Props> = ({ children, className = '' }) => (
  <div className={`bg-gray-800 p-4 rounded-2xl shadow-md ${className}`}>{children}</div>
);

export default Card;
