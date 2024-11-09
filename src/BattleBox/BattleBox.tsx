import React, { ReactNode } from 'react';
import styles from './BattleBox.module.css';
import MoveElement, { Move } from './Move';

interface BattleBoxArgs {
  moves: Move[];
}

function BattleBox({moves: [move1, move2, move3, move4]}: BattleBoxArgs) {
  return (
    <div className={styles['battle-box']}>
      <div className={styles['row']}>
        <MoveElement move={move1} />
        <MoveElement move={move2} />
      </div>
      <div className={styles['row']}>
        <MoveElement move={move3} />
        <MoveElement move={move4} />
      </div>
    </div>
  );
}

export default BattleBox;
