import styles from './BattleBox.module.css';

export interface Move {
  name: string;
  color: string;
  disabled?: boolean;
  callback: ()=>void;
}

export default function MoveElement({move}: {move: Move|undefined}) {
  return move && !move.disabled ? 
    <div className={styles['move']} onClick={move.callback} style={{backgroundColor: move.color}}><p>{move.name}</p></div> :
    <div className={styles['disabled-move']}></div>
}
