import React, { ReactNode } from 'react';
import { Button } from 'react-bootstrap';
import styles from './RetroButton.module.css'
import { Link } from 'react-router-dom';

interface RetroButtonArgs {
  children: ReactNode;
  to: string;
  state: any;
  disabled: boolean;
}

function RetroButton({children, to, state, disabled}: RetroButtonArgs) {
  return (
    <Link className={styles['retro-button']} to={to} state={state}>
      <button disabled={disabled}>
        {children}
      </button>
    </Link>
  );
}

export default RetroButton;
