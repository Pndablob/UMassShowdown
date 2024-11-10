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
import { ActionType } from '../Game/Action';
import { updateGlobalStateOnWin } from '../GlobalState/GlobalState'; 

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

  const dialogue = useRef(new Dialogue());
  const game = useRef(new Battle(dialogue.current, state.professorsChosen, state.opponent));

  const [mode, setMode] = useState<InfoBoxMode>(InfoBoxMode.MESSAGE);

  const [dialogueText, setDialogueText] = useState("");
  const [textRemaining, setTextRemaining] = useState(true);
  const [hasMovesLeft, setHasMovesLeft] = useState(false);
  const [activeProf, setActiveProf] = useState<Professor | undefined>(undefined);
  const [oppProf, setOppProf] = useState<Professor | undefined>(undefined);

  const updateScreen = () => {
    if (game.current.isGameOver() !== 0) {
      if (game.current.isGameOver() === 1) { // the player wins
        setGlobalState(updateGlobalStateOnWin(state.opponent, globalState));
        setOppProf(undefined);
      } else {
        setActiveProf(undefined);
      }

      navigate('/');

    } else {
      setOppProf(game.current.getOpponentActiveProfessor().copy());
      setActiveProf(game.current.getActiveProfessor().copy());
    }
    
  }

  const update = (hasMovesLeftTemp: boolean) => {
    let hasText = dialogue.current.hasText();

    setTextRemaining(hasText);
    setHasMovesLeft(hasMovesLeftTemp);

    if (hasText) {
      setMode(InfoBoxMode.MESSAGE);
      let isTextRemaining = dialogue.current.getText(setDialogueText);
      setTextRemaining(isTextRemaining);
    }
  }

  const makeMove = (move: number) => {
    let hasMovesLeftTemp = game.current.processAction({isPlayer: true, type: ActionType.ATTACK, moveIndex: move});
    update(hasMovesLeftTemp);
  }

  useEffect(()=>{
    dialogue.current.addText(`${state.opponent} has begun! Press ENTER to continue.`);

    let isTextRemaining = dialogue.current.getText(setDialogueText);
    setTextRemaining(isTextRemaining);

    updateScreen();
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
            updateScreen();
            let hasMovesLeftTemp = game.current.gameLoop();
            update(hasMovesLeftTemp);
          } else {
            updateScreen();
            setMode(InfoBoxMode.BATTLE1);
          }
        }
      }
    }

    window.addEventListener('keypress', onEnter);
    return () => {window.removeEventListener('keypress', onEnter)};
  }, [mode, textRemaining, hasMovesLeft])


  return (
    <div className={styles['container']}>
      <div className={styles['battle-container']}>
        <div className={styles['professor']}>
          <div className={styles['player-info-right']}>
            { game.current.getPlayerProfessors().map((prof: Professor)=>{
              return <div key={prof.getName()} className={styles['small-image-container']}>
                <img 
                  alt={prof.getName()} 
                  src={prof.getPicture()} 
                  className={styles['small-image']}
                  style={{opacity: prof.getHealth()<=0 ? 0.3 : 1}}
                />
              </div>
            })}
          </div>
          {activeProf!==undefined ? <ProfessorElement professor={activeProf}/> : ""}
        </div>
        <div className={styles['professor']}>
          <div className={styles['player-info-right']}>
            { game.current.getOpponentProfessors().map((prof: Professor)=>{
              return <div key={prof.getName()} className={styles['small-image-container']}>
                <img 
                  alt={prof.getName()} 
                  src={prof.getPicture()} 
                  className={styles['small-image']}
                  style={{opacity: prof.getHealth()<=0 ? 0.3 : 1}}
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
                callback: ()=>{makeMove(0)},
                disabled: !(activeProf && activeProf.getMoves().length > 0),
              },
              {
                name: activeProf&& activeProf.getMoves().length > 1 ? activeProf.getMoves()[1].name : "",
                color: "#C084E7",
                callback: ()=>{makeMove(1)},
                disabled: !(activeProf&& activeProf.getMoves().length > 1),
              },
              {
                name: activeProf&& activeProf.getMoves().length > 2 ? activeProf.getMoves()[2].name : "",
                color: "#C084E7",
                callback: ()=>{makeMove(2)},
                disabled: !(activeProf&& activeProf.getMoves().length > 2),
              },
              {
                name: activeProf&& activeProf.getMoves().length > 3 ? activeProf.getMoves()[3].name : "",
                color: "#C084E7",
                callback: ()=>{makeMove(3)},
                disabled: !(activeProf&& activeProf.getMoves().length > 3),
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
