import MessageBox from '../MessageBox/MessageBox';
import styles from './BattleScreen.module.css';
import ProfessorElement from './ProfessorElement';
import GlobalState from '../GlobalState/GlobalState';
import { Dispatch, SetStateAction, useRef } from 'react';
import Game from '../Game/Game';
import Dialogue from '../Dialogue/Dialogue';
import Player from '../Game/Player';
import { Location, useLocation } from 'react-router-dom';
import ProfessorTemplate from '../Game/ProfessorTemplate';

interface BattleScreenArgs {
  globalState: GlobalState;
  setGlobalState: Dispatch<SetStateAction<GlobalState>>;
}

export interface BattleInitArgs {
  professorsChosen: ProfessorTemplate[];
  opponent: string;
}

function BattleScreen({globalState, setGlobalState}: BattleScreenArgs) {
  const location: Location = useLocation();
  const state: BattleInitArgs = location.state;

  const dialogue = useRef(new Dialogue());

  const game = useRef(new Game(dialogue.current, state.professorsChosen, state.opponent));

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
