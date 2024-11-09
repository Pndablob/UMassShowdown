import styles from './BattleScreen.module.css';
import Professor from '../Game/Professor';

export default function ProfessorElement({professor}: {professor: Professor}) {
  return <div className={styles['professor-interior']}>
    <div className={styles['health-bar-container']}>
      <div className={styles['health-bar']}></div>
    </div>
    <div className={styles['professor-image-container']}>
      <img src={professor.getPicture()} />
    </div>
  </div>
};
