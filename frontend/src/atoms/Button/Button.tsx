import React from 'react';
import './Button.scss';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled, className }) => (
  <button
    className={`atom-btn fade-in ${className || ''}`.trim()}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button; 