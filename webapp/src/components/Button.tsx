import React from 'react';

type Props = { onClick: () => void; children: React.ReactNode };
const Button: React.FC<Props> = ({ onClick, children }) => (
  <button
    className="bg-gold text-dark px-4 py-2 rounded-xl font-semibold shadow-sm"
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
