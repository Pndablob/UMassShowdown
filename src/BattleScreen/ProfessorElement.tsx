import styles from './BattleScreen.module.css';
import Professor from '../Game/Professor';

export default function ProfessorElement({professor}: {professor: Professor}) {
  let health = professor.getHealth()/professor.getMaxHealth()*100;

  return <div className={styles['professor-interior']}>
    <div>
      <p className={styles['name']}>{professor.getName()}</p>
    </div>
    <div className={styles['health-bar-container']}>
      <div className={styles['health-bar']} style={{width: `${health}%`}}></div>
    </div>
    <div className={styles['professor-image-container']}>
      <img className={styles['professor-image']} alt={professor.getName()} src={professor.getPicture()} />
    </div>
  </div>
};
