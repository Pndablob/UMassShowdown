import MessageBox from '../MessageBox/MessageBox';
import styles from './BattleScreen.module.css';
import ProfessorElement from './ProfessorElement';
import GlobalState from '../GlobalState/GlobalState';
import { Dispatch, SetStateAction, useRef } from 'react';
import Battle from '../Game/Battle';
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

  const game = useRef(new Battle(dialogue.current, state.professorsChosen, state.opponent));

  let activeProf = game.current.getActiveProfessor();
  let oppProf = game.current.getOpponentActiveProfessor();

  return (
    <div className={styles['container']}>
      <div className={styles['battle-container']}>
        <div className={styles['left-professor']}>
          {activeProf!==undefined ? <ProfessorElement professor={activeProf}/> : ""}
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
                <img 
                  alt={prof.getName()} 
                  src={prof.getPicture()} 
                  className={styles['small-image']}
                  style={{opacity: prof.getHealth()===0 ? 0.3 : 1}}
                />
              </div>
            })}
          </div>
          {oppProf!==undefined ? <ProfessorElement professor={oppProf}/> : ""}
        </div>
      </div>
      <div className={styles['message-container']}>
        <MessageBox>SAMPLE TEXT</MessageBox>
      </div>
    </div>
  );
}

export default BattleScreen;
