import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import RetroLink from '../RetroButton/RetroLink';
import styles from './TeamSelectScreen.module.css';
import { Link } from 'react-router-dom';
import { BattleInitArgs } from '../BattleScreen/BattleScreen';
import Anderson0 from '../Game/Professors/Anderson0';
import GlobalState from '../GlobalState/GlobalState';
import ProfessorTemplate from '../Game/ProfessorTemplate';
import MessageBox from '../MessageBox/MessageBox';
import Profile from './Profile';

interface TeamSelectArgs {
  globalState: GlobalState;
  setGlobalState: Dispatch<SetStateAction<GlobalState>>;
}

function TeamSelect({globalState, setGlobalState}: TeamSelectArgs) {

  const myTeam = useRef<ProfessorTemplate[]>([]);
  let battleInitState: BattleInitArgs = {
    opponent: "110",
    professorsChosen: myTeam.current
  }

  // This is just used to force update when team changes
  const [dummyState, setDummyState] = useState<number>(0);
  const forceState = ()=>{ 
    battleInitState.professorsChosen = myTeam.current;
    setDummyState(dummyState+1); 
  }

  return (
    <div className={styles['container']}>
      <div className={styles['left-container']}>
        <div className={styles['professor-container']}>
          { globalState.charactersUnlocked.map(
            (template: ProfessorTemplate)=>{
              return <Profile 
                isEnabled={!myTeam.current.includes(template)}
                removeMode={false}
                key={template.id}
                prof={template}
                team={myTeam}
                update={forceState}
              />
            }
          )}
        </div>
        <div className={styles['message-container']}>
          <MessageBox>Click on professors above to put them on your team!</MessageBox>
        </div>
      </div>
      <div className={styles['right-container']}>
        <h1 className={styles['header']}>{myTeam.current.length}/3 SELECTED</h1>
        <div className={styles['professor-container']}>
          { myTeam.current.map(
            (template: ProfessorTemplate)=>{
              return <Profile 
                isEnabled={true}
                removeMode={true}
                key={template.id}
                prof={template}
                team={myTeam}
                update={forceState}
              />
            }
          )}
        </div>
        <RetroLink disabled={myTeam.current.length == 0} to="/battleScreen" state={battleInitState}>Start Class</RetroLink>
      </div>
    </div>
  );
}

export default TeamSelect;
