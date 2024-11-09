import MessageBox from '../MessageBox/MessageBox';
import styles from './BattleScreen.module.css';
import ProfessorElement from './ProfessorElement';
import GlobalState from '../GlobalState/GlobalState';
import { Dispatch, SetStateAction, useRef } from 'react';
import Game from '../Game/Game';
import Dialogue from '../Dialogue/Dialogue';
import Player from '../Game/Player';

interface BattleScreenArgs {
  globalState: GlobalState;
  setGlobalState: Dispatch<SetStateAction<GlobalState>>;
}

function BattleScreen({globalState, setGlobalState}: BattleScreenArgs) {
  const dialogue = useRef(new Dialogue());
  const game = useRef(new Game(dialogue.current, new Player([],[]), "-1"));
  return (
    <div className={styles['container']}>
      <div className={styles['battle-container']}>
        <div className={styles['left-professor']}>
          {game.current.getPlayerProfessors.length!==0 ? <ProfessorElement professor={game.current.getPlayerProfessors()[0]}/> : ""}
        </div>
        <div className={styles['right-professor']}>
          {game.current.getPlayerProfessors.length!==0 ? <ProfessorElement professor={game.current.getPlayerProfessors()[0]}/> : ""}
        </div>
      </div>
      <div className={styles['message-container']}>
        <MessageBox />
      </div>
    </div>
  );
}

export default BattleScreen;
