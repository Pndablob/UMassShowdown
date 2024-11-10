import ProfessorTemplate from "../Game/ProfessorTemplate";
import { getProfFromID } from '../Game/Professors/IDs';
import Courses, { prerequisiteMap } from '../Game/Courses';
import Course from '../Game/Course';
import { Dispatch, SetStateAction } from "react";

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

export function updateGlobalStateOnWin(beatenCourse: string, globalState: GlobalState): GlobalState {
  let newState: GlobalState = {
    levelsUnlocked: [],
    charactersUnlocked: structuredClone(globalState.charactersUnlocked),
  }
  for (const courseName of Object.keys(prerequisiteMap)){
    if (!courseName) continue;
    let hasAll = true;

    let prereqs = prerequisiteMap.get(courseName);
    if (!prereqs) continue;

    for (const prereq of prereqs) {
      if (globalState.levelsUnlocked.includes(prereq) && prereq !== beatenCourse) {
        hasAll = false;
      }
    }

    if (!hasAll) continue;

    let course: Course|undefined = Courses.get(courseName);
    if (!course) continue;

    let profs: ProfessorTemplate[] = course.getProfessors();

    newState.charactersUnlocked.push(...profs);
    newState.levelsUnlocked.push(courseName);
  }
  return newState;
}
