import MessageBox from '../MessageBox/MessageBox';
import styles from './BattleScreen.module.css';
import ProfessorElement from './ProfessorElement';
import GlobalState from '../GlobalState/GlobalState';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import Battle from '../Game/Battle';
import Dialogue from '../Dialogue/Dialogue';
import Player from '../Game/Player';
import { useNavigate, Location, useLocation } from 'react-router-dom';
import ProfessorTemplate from '../Game/ProfessorTemplate';
import Professor from '../Game/Professor';
import BattleBox from '../BattleBox/BattleBox';

enum InfoBoxMode {
  MESSAGE,
  BATTLE1,
  BATTLE2
}

interface BattleScreenArgs {
  globalState: GlobalState;
  setGlobalState: Dispatch<SetStateAction<GlobalState>>;
}

export interface BattleInitArgs {
  professorsChosen: ProfessorTemplate[];
  opponent: string;
}

function BattleScreen({globalState, setGlobalState}: BattleScreenArgs) {

  const navigate = useNavigate();

  const location: Location = useLocation();
  const state: BattleInitArgs = location.state;

  const [mode, setMode] = useState<InfoBoxMode>(InfoBoxMode.MESSAGE);

  const dialogue = useRef(new Dialogue());
  const [dialogueText, setDialogueText] = useState("");
  const [textRemaining, setTextRemaining] = useState(true);
  const [hasMovesLeft, setHasMovesLeft] = useState(false);

  console.log(location.state);

  const useMove = (move: number) => {
    let hasMovesLeftTemp = game.current.processAction({isPlayer: true, isSwitch: false, moveIndex: move});

    let hasText = dialogue.current.hasText();

    setTextRemaining(hasText);

    if (hasText) {
      setMode(InfoBoxMode.MESSAGE);
      let isTextRemaining = dialogue.current.getText(setDialogueText);
      setTextRemaining(isTextRemaining);
    }

    setHasMovesLeft(hasMovesLeftTemp);
  }

  useEffect(()=>{
    dialogue.current.addText(`${state.opponent} has begun! Press ENTER to continue.`);
    dialogue.current.addText(`Press ENTER to continue.`);

    let isTextRemaining = dialogue.current.getText(setDialogueText);
    setTextRemaining(isTextRemaining);
  }, []);

  useEffect(()=>{
    const onEnter = (event: KeyboardEvent)=> {
      if (event.key !== "Enter") return;
      if (mode === InfoBoxMode.MESSAGE) {
        if (textRemaining) {
          let isTextRemaining = dialogue.current.getText(setDialogueText);
          setTextRemaining(isTextRemaining);
        } else {
          if (hasMovesLeft) {

          } else {
            setMode(InfoBoxMode.BATTLE1);
          }
        }
      }
    }

    window.addEventListener('keypress', onEnter);
    return () => {window.removeEventListener('keypress', onEnter)};
  }, [mode, textRemaining])

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
        { mode===InfoBoxMode.MESSAGE ? 
          <MessageBox>{dialogueText}</MessageBox> : 
          (mode===InfoBoxMode.BATTLE1 ? <BattleBox moves={
            [
              {
                name: "USE MOVE",
                color: "#f18073",
                callback: ()=>{
                  setMode(InfoBoxMode.BATTLE2);
                },
              },
              {
                name: "FORFEIT",
                color: "lightblue",
                callback: ()=>{navigate("/");}
              }
            ]
          } /> : <BattleBox moves={
            [
              {
                name: activeProf && activeProf.getMoves().length > 0 ? activeProf.getMoves()[0].name : "",
                color: "#C084E7",
                callback: ()=>{useMove(0)},
                disabled: !(activeProf && activeProf.getMoves().length > 0),
              },
              {
                name: activeProf && activeProf.getMoves().length > 1 ? activeProf.getMoves()[1].name : "",
                color: "#C084E7",
                callback: ()=>{useMove(1)},
                disabled: !(activeProf && activeProf.getMoves().length > 1),
              },
              {
                name: activeProf && activeProf.getMoves().length > 2 ? activeProf.getMoves()[2].name : "",
                color: "#C084E7",
                callback: ()=>{useMove(2)},
                disabled: !(activeProf && activeProf.getMoves().length > 2),
              },
              {
                name: activeProf && activeProf.getMoves().length > 3 ? activeProf.getMoves()[3].name : "",
                color: "#C084E7",
                callback: ()=>{useMove(3)},
                disabled: !(activeProf && activeProf.getMoves().length > 3),
              },
            ]
          } />
          )
        }
      </div>
    </div>
  );
}

export default BattleScreen;
