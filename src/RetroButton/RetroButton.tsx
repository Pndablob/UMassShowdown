import React, { ReactNode } from 'react';
import { Button } from 'react-bootstrap';
import styles from './RetroButton.module.css'

interface RetroButtonArgs {
  children: ReactNode;
}

function RetroButton({children}: RetroButtonArgs) {
  return (
    <button className={styles['retro-button']}>
        {children}
    </button>
  );
}

export default RetroButton;
