import ProfessorTemplate from "../Game/ProfessorTemplate";
import { getProfFromID } from '../Game/Professors/IDs';

export default interface GlobalState{
  levelsUnlocked: string[];
  charactersUnlocked: ProfessorTemplate[];
}

export interface GlobalStateSerialized {
  levelsUnlocked: string[];
  charactersUnlocked: number[]; // class names of professors
}

export function getStateFromSerialized(ser: GlobalStateSerialized): GlobalState {
  console.log(ser.levelsUnlocked);
  return {
    levelsUnlocked: ser.levelsUnlocked,
    charactersUnlocked: ser.charactersUnlocked.map((id)=>getProfFromID(id))
  }
}

export function getSerializedFromState(state: GlobalState): GlobalStateSerialized {
  return {
    levelsUnlocked: state.levelsUnlocked,
    charactersUnlocked: state.charactersUnlocked.map((prof)=>prof.id)
  }
}
