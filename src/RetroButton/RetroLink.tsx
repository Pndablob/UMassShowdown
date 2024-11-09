import React, { ReactNode } from 'react';
import { Button } from 'react-bootstrap';
import styles from './RetroButton.module.css'
import { Link } from 'react-router-dom';

interface RetroButtonArgs {
  children: ReactNode;
  to: string;
  state: any;
}

function RetroButton({children, to, state}: RetroButtonArgs) {
  return (
    <Link className={styles['retro-button']} to={to} state={state}>
      <button>
        {children}
      </button>
    </Link>
  );
}

export default RetroButton;
