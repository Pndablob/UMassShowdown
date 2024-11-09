import React from 'react';
import RetroLink from '../RetroButton/RetroLink';
import styles from './TeamSelectScreen.module.css';
import { Link } from 'react-router-dom';
import { BattleInitArgs } from '../BattleScreen/BattleScreen';
import Anderson0 from '../Game/Professors/Anderson0';

function TeamSelect({globalState, setGlobalState}: any) {
  let battleInitState: BattleInitArgs = {
    opponent: "110",
    professorsChosen: [
      Anderson0
    ]
  }

  return (
    <div className={styles['container']}>
      <h1 className={styles['header']}>Select Your Team</h1>
      <RetroLink to="/battleScreen" state={battleInitState}>Select Team</RetroLink>
    </div>
  );
}

export default TeamSelect;
