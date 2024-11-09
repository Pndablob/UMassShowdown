import React, { Dispatch, SetStateAction } from 'react';
import RetroLink from '../RetroButton/RetroLink';
import styles from './TeamSelectScreen.module.css';
import { Link } from 'react-router-dom';
import { BattleInitArgs } from '../BattleScreen/BattleScreen';
import Anderson0 from '../Game/Professors/Anderson0';
import GlobalState from '../GlobalState/GlobalState';
import ProfessorTemplate from '../Game/ProfessorTemplate';
import MessageBox from '../MessageBox/MessageBox';

interface TeamSelectArgs {
  globalState: GlobalState;
  setGlobalState: Dispatch<SetStateAction<GlobalState>>;
}

function TeamSelect({globalState, setGlobalState}: TeamSelectArgs) {
  let battleInitState: BattleInitArgs = {
    opponent: "110",
    professorsChosen: [
      Anderson0
    ]
  }

  return (
    <div className={styles['container']}>
      {/*<h1 className={styles['header']}>Select Your Team</h1>*/}
      {/*<RetroLink to="/battleScreen" state={battleInitState}>Select Team</RetroLink>*/}
      <div className={styles['left-container']}>
        <div className={styles['professor-container']}>
          { globalState.charactersUnlocked.map(
            (template: ProfessorTemplate)=>{
              return <div key={template.id}>
                <img src={template.picture} alt={template.name}/>
              </div>
            }
          )}
        </div>
        <div className={styles['message-container']}>
          <MessageBox />
        </div>
      </div>
      <div className={styles['right-container']}></div>
    </div>
  );
}

export default TeamSelect;
