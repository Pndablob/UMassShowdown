import ProfessorTemplate from "../Game/ProfessorTemplate";
import { getProfFromID } from '../Game/Professors/IDs';
import Courses, { prerequisiteMap } from '../Game/Courses';
import Course from '../Game/Course';
import { Dispatch, SetStateAction } from "react";
import Professor from "../Game/Professor";
import Anderson0 from '../Game/Professors/Anderson0';
import Haas0 from '../Game/Professors/Haas0';

export default interface GlobalState{
  levelsUnlocked: string[];
  charactersUnlocked: ProfessorTemplate[];
  levelsBeaten: string[];
}

export interface GlobalStateSerialized {
  levelsUnlocked: string[];
  charactersUnlocked: number[]; // class names of professors
  levelsBeaten: string[];
}

export function getStateFromSerialized(ser: GlobalStateSerialized): GlobalState {
  return {
    levelsUnlocked: ser.levelsUnlocked,
    charactersUnlocked: ser.charactersUnlocked.map((id)=>getProfFromID(id)),
    levelsBeaten: ser.levelsBeaten,
  }
}

export function getSerializedFromState(state: GlobalState): GlobalStateSerialized {
  return {
    levelsUnlocked: state.levelsUnlocked,
    charactersUnlocked: state.charactersUnlocked.map((prof)=>prof.id),
    levelsBeaten: state.levelsBeaten,
  }
}

export function updateGlobalStateOnWin(beatenCourse: string, globalState: GlobalState): GlobalState {
  let newState: GlobalState = {
    levelsUnlocked: [],
    charactersUnlocked: structuredClone(globalState.charactersUnlocked),
    levelsBeaten: structuredClone(globalState.levelsBeaten),
  }

  // add new beaten level
  newState.levelsBeaten.push(beatenCourse);
  newState.levelsBeaten = Array.from(new Set(newState.levelsBeaten));

  
  for (const courseName of Array.from(prerequisiteMap.keys())){
    if (!courseName) {
      continue;
    };

    let hasAll = true;

    let prereqs = prerequisiteMap.get(courseName);
    if (!prereqs) {
      continue;
    }

    for (const prereq of prereqs) {
      if (!globalState.levelsBeaten.includes(prereq) && prereq !== beatenCourse) {
        hasAll = false;
      }
    }

    if (!hasAll) {
      continue;
    }

    newState.levelsUnlocked.push(courseName);
  }

  let set: Set<ProfessorTemplate> = new Set([Anderson0, Haas0]);
  for (let i = 0; i < newState.levelsBeaten.length; ++i) {
    let course: Course|undefined = Courses.get(newState.levelsBeaten[i]);
    if (!course) {
      continue;
    }
    let profs = course.getProfessors();
    for (let j = 0; j < profs.length; ++j) {
      set.add(profs[j]);
    }
  }

  newState.charactersUnlocked = Array.from(set);

  return newState;
}
