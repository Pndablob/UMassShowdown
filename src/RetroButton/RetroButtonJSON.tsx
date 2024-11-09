import React, { ReactNode } from 'react';
import styles from './RetroButton.module.css';

interface RetroButtonProps {
  onClick: () => void; // Type the onClick prop as a function that takes no arguments and returns void
  children: ReactNode;  // To accept any children inside the button (like text or other elements)
}

function RetroButton({ onClick, children }: RetroButtonProps) {
  return (
    <button className={styles['retro-button']} onClick={onClick}>
      {children}  {/* Display the children inside the button */}
    </button>
  );
}

export default RetroButton;
