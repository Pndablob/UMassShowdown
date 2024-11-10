import ProfessorTemplate from "../Game/ProfessorTemplate";
import styles from './Profile.module.css';

interface ProfileArgs {
  prof: ProfessorTemplate;
  team: React.MutableRefObject<ProfessorTemplate[]>;
  isEnabled: boolean;
  removeMode: boolean;
  update: ()=>void;
}

export default function Profile({prof, team, removeMode, isEnabled, update}: ProfileArgs) {
  const clickHandler = () => {
    if (!team.current || !isEnabled) return;
    if (removeMode) {
      team.current = team.current.filter((el)=>el.id !== prof.id);
    } else {
      team.current.push(prof);
    }
    update();
  }

  return <>
    {
        isEnabled ? 
          <div className={styles['container']} onClick={clickHandler}>
            <img className={styles['image']} src={prof.picture} alt={prof.name}/>
            <div className={styles['text']}>{prof.name}</div>
          </div> 
          : <div className={styles['disabled-container']} onClick={clickHandler}>
            <img className={styles['image']} src={prof.picture} alt={prof.name}/>
            <div className={styles['text']}>{prof.name}</div>
          </div>
    }
  </>
}
