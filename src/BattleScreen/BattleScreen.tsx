import MessageBox from '../MessageBox/MessageBox';
import styles from './BattleScreen.module.css';

function BattleScreen({globalState, setGlobalState}: any) {
  return (
    <div className={styles['container']}>
      <div className={styles['battle-container']}>
        <h1>Battle Screen</h1>
      </div>
      <div className={styles['message-container']}>
        <MessageBox />
      </div>
    </div>
  );
}

export default BattleScreen;
