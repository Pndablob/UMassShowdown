import React, { ReactNode } from 'react';
import styles from './MessageBox.module.css';

function MessageBox({children}: {children: ReactNode}) {
  return (
    <div className={styles['message-box']}>
      <p>{children}</p>
    </div>
  );
}

export default MessageBox;
