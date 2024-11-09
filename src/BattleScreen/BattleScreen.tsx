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
import Professor from '../Game/Professor';

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
  console.log(state);

  const dialogue = useRef(new Dialogue());

  const game = useRef(new Game(dialogue.current, state.professorsChosen, state.opponent));

  return (
    <div className={styles['container']}>
      <div className={styles['battle-container']}>
        <div className={styles['left-professor']}>
          {game.current.getActiveProfessor()!==undefined ? <ProfessorElement professor={game.current.getActiveProfessor()}/> : ""}
          <div className={styles['player-info-left']}>
            { game.current.getPlayerProfessors().map((prof: Professor)=>{
              return <div key={prof.getName()} className={styles['small-image-container']}>
                <img alt={prof.getName()} src={prof.getPicture()} className={styles['small-image']}/>
              </div>
            })}
          </div>
        </div>
        <div className={styles['right-professor']}>
          <div className={styles['player-info-right']}>
            { game.current.getOpponentProfessors().map((prof: Professor)=>{
              return <div key={prof.getName()} className={styles['small-image-container']}>
                <img alt={prof.getName()} src={prof.getPicture()} className={styles['small-image']}/>
              </div>
            })}
          </div>
          {game.current.getOpponentActiveProfessor()!==undefined ? <ProfessorElement professor={game.current.getOpponentActiveProfessor()}/> : ""}
        </div>
      </div>
      <div className={styles['message-container']}>
        <MessageBox>SAMPLE TEXT</MessageBox>
      </div>
    </div>
  );
}

export default BattleScreen;
