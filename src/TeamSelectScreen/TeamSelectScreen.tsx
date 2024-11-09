import React from 'react';
import RetroLink from '../RetroButton/RetroLink';
import styles from './TeamSelectScreen.module.css';
import { Link } from 'react-router-dom';

function TeamSelect({globalState, setGlobalState}: any) {
  return (
    <div className={styles['container']}>
      <h1 className={styles['header']}>Select Your Team</h1>
      <RetroLink to="/battleScreen" state={undefined}>Select Team</RetroLink>
    </div>
  );
}

export default TeamSelect;
